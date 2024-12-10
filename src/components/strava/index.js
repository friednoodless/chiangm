import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import "./style.css";

export const StravaData = () => {
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [strava_activities, set_strava_activities] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (process.env.REACT_APP_ENV == "DEV") {
      set_strava_activities(require("../../sample-data/activities.json"));
    } else {
      fetch(
        "https://pup85be7hc.execute-api.ap-southeast-1.amazonaws.com/api/get_strava_data",
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((json) => set_strava_activities(json))
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <div>
        <Nav.Link onClick={handleShow}>
          Strava
        </Nav.Link>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <p>
            Follow me on{" "}
            <a href="https://www.strava.com/athletes/99677044">Strava!</a>, I
            just did a:
            <ul>
              {strava_activities.map((activity) => {
                if (
                  activity.hasOwnProperty("type") &&
                  activity.hasOwnProperty("distance") &&
                  activity.hasOwnProperty("moving_time") &&
                  activity.hasOwnProperty("start_date_local")
                ) {
                  var activity_date = new Date(
                    Date.parse(activity.start_date_local)
                  );

                  return (
                    <li>
                      {Math.floor(activity.distance / 1000)}km{" "}
                      {activity.type.replace(/([A-Z])/g, " $1")}{" "}
                      {/* for {Math.floor(activity.moving_time / 60)} minutes */}
                      on {dayOfWeek[activity_date.getDay()]} (
                      {activity_date.getMonth() + 1}/{activity_date.getDate()})
                    </li>
                  );
                }
              })}
            </ul>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

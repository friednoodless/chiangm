import React from "react";
import "./style.css";

function get_strava_data() {
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let strava_activities = [];
  if (process.env.REACT_APP_ENV == "DEV") {
    strava_activities = require("../../sample-data/activities.json");
  }

  return (
    <ul>
      {strava_activities.map((activity) => {
        if (
          activity.hasOwnProperty("type") &&
          activity.hasOwnProperty("distance") &&
          activity.hasOwnProperty("moving_time") &&
          activity.hasOwnProperty("start_date_local")
        ) {
          var activity_date = new Date(Date.parse(activity.start_date_local));

          return (
            <li> 
            {Math.floor(activity.distance / 1000)}km {activity.type.replace(/([A-Z])/g, ' $1')} {" "}
            {/* for {Math.floor(activity.moving_time / 60)} minutes */}
             on{" "}
              {dayOfWeek[activity_date.getDay()]} ({activity_date.getMonth()+1}/{activity_date.getDate()})
            </li>
          );
        }
      })}
    </ul>
  );
}

export const Home = () => {
  return (
    <div className="center body">
      <div>
        <h3>Hello! I am Matthew</h3>
      </div>
      <div>
        <p>
          I am a software engineer currently working at <a href="https://aws.amazon.com/solutions/case-studies/innovators/goldman-sachs/">Goldman Sachs in the
          Cloud team</a>, a graduate of <a href="https://admissions.smu.edu.sg/">Singapore Management University</a>.
        </p>
        <p>
          Some cool things that I have done on the team:
          <ul>
            <li>
              Develop a spark pipeline to analyze Goldman Sach's daily 500GB
              Cloudtrail logs
            </li>
            <li>
              Iterated on Goldman Sach's Cloud Asset Inventory for better
              accuracy
            </li>
            <li>
              Implement reconciliation between Goldman Sach's Cloud Asset Inventory
              and alternate sources (Cloudtrail)
            </li>
            <li>... and many more</li>
          </ul>
        </p>

        <p>
          Some stuff that I am currently work(ed/ing) on:
          <ul>
            <li>
                Diving deeper into data engineering
            </li>

            <li> 
                Working towards a Ironman 70.3
            </li>
            <li>
                ... with more to come
            </li>
          </ul>
        </p>


        <p>
          My most recent <a href="https://www.strava.com/athletes/99677044">stava activities</a>:
          {get_strava_data()}
        </p>
      </div>
    </div>
  );
};

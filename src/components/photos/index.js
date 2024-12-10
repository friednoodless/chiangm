import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import "./style.css";

export const Photos = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Nav.Link onClick={handleShow}>
          Photography
        </Nav.Link>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Carousel slide={false} interval={null}>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="First slide" /> */}
              <Image
                src="https://www.dropbox.com/scl/fi/dbgvo1iw2pro1q9f9xjff/US-Japan-02.jpg?rlkey=pbsoetthbkn45eapdc56usn1t&st=oyekmasm&dl=1"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <Image
                src="https://www.dropbox.com/scl/fi/uf0fhouibl1xwiakjxi2y/US-Japan-23.jpg?rlkey=edsoeoohwjcjeapv5atndc4r4&st=a9xv1m0s&dl=1"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <Image
                src="https://www.dropbox.com/scl/fi/7mb6kkgn8nkjbh7qpx547/US-Japan-18.jpg?rlkey=dkagfgpqxlyyt4q9tn7toze1g&st=puk8m57i&dl=1"
                fluid
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};

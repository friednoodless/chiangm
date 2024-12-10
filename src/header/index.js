import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

export const Header = ({children}) => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home" className="site__header">chiangm</Navbar.Brand>
      <Nav className="me-auto header__content">
      {children}
      </Nav>
    </Navbar>
  );
};

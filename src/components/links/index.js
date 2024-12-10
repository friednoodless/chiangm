import React, { useState, useEffect } from "react";
import "./style.css";
import Nav from 'react-bootstrap/Nav';


export const Links = () => {
  return (
    <div className="header__right__align"> 
    <table>
      <tr>
        <td>
        <Nav.Link className="header__links" href="https://www.linkedin.com/in/matthew-chiang1/" target="_blank">Linkedin</Nav.Link>
        </td>
        <td>
        <Nav.Link className="header__links" href="mailto:chiang.m.591@gmail.com" target="_blank">Email</Nav.Link>
        </td>
      </tr>
    </table>
      
      
    </div>
  );
};

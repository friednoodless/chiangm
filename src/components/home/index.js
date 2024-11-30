import React, { useState, useEffect } from "react";
import "./style.css";

export const Home = () => {
  return (
    <div className="center body">
      <div>
        <h3>Hello! I am Matthew</h3>
      </div>
      <div>
        <p>
          I am a software engineer currently working at{" "}
          <a href="https://www.goldmansachs.com/">Goldman Sachs</a>{" "}
          in the{" "}
          <a href="https://aws.amazon.com/solutions/case-studies/innovators/goldman-sachs/">
            Cloud team
          </a>
          , a graduate of{" "}
          <a href="https://admissions.smu.edu.sg/">
            Singapore Management University
          </a>
          .
        </p>
        <p>
          Some cool things that I have done on the team:
          <ul>
            <li>
              Develop a spark pipeline to analyze Goldman Sach's daily 1TB of
              Cloudtrail logs
            </li>
            <li>
              Iterated on Goldman Sach's Cloud Asset Inventory for better
              accuracy
            </li>
            <li>
              Implement reconciliation between Goldman Sach's Cloud Asset
              Inventory and alternate sources (AWS Cloudtrail/GCP Audit Logs)
            </li>
            <li>... and many more</li>
          </ul>
        </p>

        <p>
          Some stuff that I am currently work(ed/ing) on:
          <ul>
            <li>Diving deeper into data engineering</li>

            <li>Working towards a Ironman 70.3</li>
            <li>... with more to come</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

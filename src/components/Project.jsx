import React from "react";

function Project() {
  return (
    <div className="about-me">
      <ul>
        <li>
          <h3>Farm Manager App</h3>
          <p style={{ fontSize: "22px", lineHeight: "2" }}>
            This is a group project completed by 5 people during my third year
            in a Software Engineer course, a farm manager app. The main features
            of this app are organizing data of crop fields, make neccessary
            calculations, and provide a graph summarizing the data.<br></br>This
            app frontend is built using JavaFX and backend was implemented using
            java. Data is recorded using MongoDB.
          </p>
        </li>
        <li>
          <h3>Channel-based Tool Web App</h3>
          <p style={{ fontSize: "22px", lineHeight: "2" }}>
            Channel-based Tool is a fullstack web app with frontend implemented
            with ReactJS and backend is implemented in javascript using NodeJS
            environment. I used ExpressJS for server and data is save in MySQL
            database.<br></br>This web app allows users to log in, create
            channels, post discussions, comments, replies.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Project;

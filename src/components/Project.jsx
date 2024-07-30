import React from "react";

function Project() {
  return (
    <div className="about-me">
      <ul>
        <li>
          <h3>Farm Manager App</h3>
          <p style={{ fontSize: "22px", lineHeight: "2" }}>
            This group project, completed by a team of five during my third year
            in a Software Engineering course, is a farm manager app. The app's
            main features include organizing crop field data, performing
            necessary calculations, and providing graphical data summaries. The
            frontend is built using JavaFX, while the backend is implemented in
            Java. Data is stored in MongoDB.
          </p>
        </li>
        <li>
          <h3>Channel-based Tool Web App</h3>
          <p style={{ fontSize: "22px", lineHeight: "2" }}>
            Channel-based Tool is a full-stack web application with a frontend
            implemented in ReactJS and a backend developed in JavaScript using a
            NodeJS environment. I utilized ExpressJS for the server, with data
            saved in a MySQL database. This web app allows users to log in,
            create channels, post discussions, and add comments and replies.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Project;

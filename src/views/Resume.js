import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Online Resume</h1>
        <button
          style={{ width: "250px", color: "white" }}
          className="primary-btn"
        >
          <FontAwesomeIcon icon={faFilePdf} size="lg" />
          <span style={{ color: "white" }}>Download PDF Version</span>
        </button>
      </div>
      <hr
        style={{
          width: "100%",
          marginTop: "50px",
          border: "none",
          height: "1px",
          backgroundColor: "rgb(49, 48, 48)",
        }}
      />
      <div className="resume">
        <div className="resume-head">
          <div>
            <h1>Ahmed Husam</h1>
            <span style={{ fontSize: "25px" }}>Web Developer</span>
          </div>
          <div>
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>d</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

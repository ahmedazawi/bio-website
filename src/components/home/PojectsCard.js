import React from "react";
const PojectsCard = (props) => {
  const urlHandler = () => {
    return (window.location.href = props.items.url);
  };
  return (
    <a href={props.items.url} target="_blank" className="project-card">
      <div className="project-img">
        <img
          src={require("../../assets/images/" + props.items.img).default}
          alt={props.items.alt}
        />
      </div>

      <div className="project-description">
        <h3>{props.items.title} </h3>
        <p>{props.items.description}</p>
      </div>
    </a>
  );
};

export default PojectsCard;

import React from "react";
import { Link } from "react-router-dom";

function ProjectItem(project) {
  const {
    _id,
    image,
    projectName,
    ownerName,
    date,
    description,
    reqFunds,
    acqFunds,
  } = project;

  return (
    <>
      <Link to={`/projects/${_id}`}>
        <div className="card px-1 py-1">
          <img alt={projectName} src={`/images/${image}`} />
          <h3>{projectName}</h3>
          <p>Created by {ownerName} on date.</p>
          <p>{description}</p>
          <p>
            Funding: ${acqFunds} / ${reqFunds}
          </p>
          <p>Launch Date: {date}</p>
        </div>
      </Link>
    </>
  );
}

export default ProjectItem;

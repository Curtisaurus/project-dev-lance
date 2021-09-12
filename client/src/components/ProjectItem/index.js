import React from "react";
import { Link } from "react-router-dom";

function ProjectItem(project) {
  const {
    key,
    image,
    projectName,
    ownerName,
    // date,
    description,
    reqFunds,
    acqFunds,
  } = project;

  return (
    <>
      <Link to={`/projects/${key}`}>
        <div className="card px-1 py-1">
          <img alt={projectName} src={`/images/${image}`} />
          <h3>{projectName}</h3>
          <p>Created by {ownerName} on date.</p>
          <p>{description}</p>
          <p>
            Funding: ${acqFunds} / ${reqFunds}
          </p>
          <p>Launch Date:</p>
        </div>
      </Link>
    </>
  );
}

export default ProjectItem;

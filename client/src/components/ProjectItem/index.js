import React from "react";
import { Link } from "react-router-dom";

function ProjectItem(project) {
  const {
    key,
    image,
    projectName,
    ownerName,
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
          <p>{ownerName}</p>
          <p>{description}</p>
          <p>
            ${acqFunds} / ${reqFunds}
          </p>
        </div>
      </Link>
    </>
  );
}

export default ProjectItem;

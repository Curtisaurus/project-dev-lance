import React from "react";
import { NavLink } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

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
    launch,
  } = project;

  return (
    <>
      <Card className="my-3">
        <NavLink to={`/projects/${_id}`}>
          <Card.Body>
            <Card.Title>{projectName}</Card.Title>
            <Card.Text>
              Created by {ownerName} on {date}.
            </Card.Text>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Funding: ${acqFunds} / ${reqFunds}
            </ListGroupItem>
            <ListGroupItem>Launch Date: {launch}</ListGroupItem>
          </ListGroup>
        </NavLink>
      </Card>
    </>
  );
}

export default ProjectItem;

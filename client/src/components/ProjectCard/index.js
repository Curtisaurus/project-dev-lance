import React from "react";
import { NavLink } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import style from "./style.css";

function ProjectCard(project) {
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
    setModalShow,
  } = project;

  return (
    <>
      <Card className="my-3 project-card">
        <a onClick={() => setModalShow(true)}>
          <Card.Header as="h4">{projectName}</Card.Header>
          <Card.Body>
            <Card.Text>
              Created by {ownerName} on {date}.
            </Card.Text>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Launch Date: {launch}</ListGroupItem>
          </ListGroup>
          <Card.Footer>
            Funding: ${acqFunds} / ${reqFunds}
          </Card.Footer>
        </a>
      </Card>
    </>
  );
}

export default ProjectCard;

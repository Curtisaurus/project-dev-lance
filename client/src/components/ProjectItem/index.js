import React from "react";
import { Link } from "react-router-dom";
import styles from "../ProjectItem/ProjectItem.css";
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
  } = project;

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Link
          className="link-style"
          to={`/projects/${_id}`}
          text-decoration="none"
        >
          <Card.Body>
            <Card.Title>{projectName}</Card.Title>
            <Card.Text>Created by {ownerName} on {date}.</Card.Text>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Funding: ${acqFunds} / ${reqFunds}
            </ListGroupItem>
            <ListGroupItem>Launch Date: {date}</ListGroupItem>
          </ListGroup>
        </Link>
      </Card>
    </>
  );
}

export default ProjectItem;

import React from "react";
// import { NavLink } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
// import style from "./style.css";

function ProjectCard(project) {
  const {
    _id,
    projectName,
    ownerName,
    date,
    description,
    reqFunds,
    acqFunds,
    launch,
    setModalShow,
    setModalId,
  } = project;

  return (
    <>
      <Card className="my-3 project-card">
<<<<<<< HEAD
        <div onClick={() => {setModalId(_id); setModalShow(true);}}>
=======
        <div
          onClick={() => {
            console.log(_id);
            setModalId(_id);
            setModalShow(true);
          }}
        >
>>>>>>> main
          <Card.Header as="h4">{projectName}</Card.Header>
          <Card.Body>
            <Card.Text>
              Created by {ownerName} on {date}
            </Card.Text>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Launch Date: {launch}</ListGroupItem>
          </ListGroup>
          <Card.Footer>
            Funding: ${acqFunds} / ${reqFunds}
          </Card.Footer>
        </div>
      </Card>
    </>
  );
}

export default ProjectCard;

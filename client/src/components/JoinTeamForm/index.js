import React from "react";
import { ADD_TEAMMATE } from "../../utils/mutations";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Container, Form, Button, ListGroup } from "react-bootstrap";

function AddTeammates(teammate) {
  const { _id, role, user, project } = teammate;

  return (
    //Render AddTeamate Component
    <Container className="bg-light p-3 my-5">
      <Form className="p-3">
        <h2>Join Dev Team</h2>
        <h4>Positions</h4>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Button variant="outline-success" className="m-2">
              Join Team
            </Button>
            Front-End Developer
          </ListGroup.Item>
          <ListGroup.Item>
            Back-End Developer: Bryan Bentz <FaGithub className="mx-1" />
            <FaLinkedin className="mx-1" />
          </ListGroup.Item>
          <ListGroup.Item>
            Junior Developer: Jay Jenks <FaGithub className="mx-1" />
            <FaLinkedin className="mx-1" />
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant="outline-success" className="m-2">
              Join Team
            </Button>
            UX Designer
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant="outline-success" className="m-2">
              Join Team
            </Button>
            Project Manager
          </ListGroup.Item>
        </ListGroup>
        <h4>Total Positions Filled: 2/5</h4>
      </Form>
    </Container>
  );
}

export default AddTeammates;

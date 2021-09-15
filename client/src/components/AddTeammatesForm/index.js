import React from "react";
import { ADD_TEAMMATE } from "../../utils/actions";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  Container,
  Form,
  InputGroup,
  Button,
  FormControl,
  ListGroup,
} from "react-bootstrap";

function AddTeammates(teammate) {
  const { _id, role, user, project } = teammate;

  return (
    //Render AddTeamate Component
    <Container className="bg-light p-3 my-5">
      <Form className="p-3">
        <h2>Add Dev Team</h2>
        <h4>Add Roles</h4>
        <InputGroup className="mb-3">
          <Button variant="success px-5" id="button-addon2">
            Add
          </Button>
          <FormControl
            placeholder="Enter dev role"
            aria-label="dev-role"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
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
        <Button variant="primary" type="submit">
          Done
        </Button>
      </Form>
    </Container>
  );
}

export default AddTeammates;

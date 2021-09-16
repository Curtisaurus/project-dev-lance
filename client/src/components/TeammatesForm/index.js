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
    <Container>
      <Form className="p-3">
        <h2>Update Dev Team</h2>
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
            <Button variant="outline-danger" className="m-2">
              Delete Role
            </Button>
            Front-End Developer
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant="outline-danger" className="m-2">
              Delete Role
            </Button>
            Back-End Developer: Bryan Bentz <FaGithub className="mx-1" />
            <FaLinkedin className="mx-1" />
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant="outline-danger" className="m-2">
              Delete Role
            </Button>
            Junior Developer: Jay Jenks <FaGithub className="mx-1" />
            <FaLinkedin className="mx-1" />
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant="outline-danger" className="m-2">
              Delete Role
            </Button>
            UX Designer
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant="outline-danger" className="m-2">
              Delete Role
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

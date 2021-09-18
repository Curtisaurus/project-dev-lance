import React, { useState } from "react";
import { ADD_PROJECT } from "../../utils/mutations";
import { Card, Container, Form, InputGroup, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";

function AddProject() {
  const [formState, setFormState] = useState({
    name: "",
    // placeholder ID 
    owner: "6145779163df9100165ab995",
    description: "",
    image: "",
    reqFunds: 0.99,
    tags: [],
    launch: "",
  });
  const [addProject, { error, data }] = useMutation(ADD_PROJECT);
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "tags") {
      let valueArr = value.trim().split(",");

      setFormState({
        ...formState,
        [name]: valueArr,
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: { ...formState },
      });
      
      console.log(data)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    //Render Project Component
    <Container>
      <Card className="bg-light p-3 my-5">
        <Form className="p-3" onSubmit={handleFormSubmit}>
          <h2>Start a Project</h2>
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="h4">Project Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your project name"
              value={formState.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="h4">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tell the world about your project!"
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="h4">Select a Project Cover Image</Form.Label>
            <Form.Control
              type="url"
              placeholder="Type an image URL"
              name="image"
              value={formState.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="h4">Funding Goal</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                aria-label="Amount (to the nearest dollar)"
                name="reqFunds"
                value={formState.reqFunds}
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="h4">Search Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter key search tags for your project"
              name="tags"
              value={formState.tags}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Use commas to separate tags with no spaces.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label className="h4">Product Launch Date</Form.Label>
            <Form.Control
              type="date"
              name="launch"
              value={formState.launch}
              onChange={handleChange}
            />
            {/* <Form.Control type="date" name='date_of_birth' error={errors.date_of_birth} ref={register} /> */}
          </Form.Group>
          <p>
            Note: After submitting your project, you will add open developer
            positions to your team.
          </p>
          {/* Use redirect on submit to redirect to AddTeammates Form */}
          <Button variant="primary" type="submit">
            Submit Project
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default AddProject;

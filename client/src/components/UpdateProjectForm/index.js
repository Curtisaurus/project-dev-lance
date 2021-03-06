import React, { useState } from "react";
import { UPDATE_PROJECT } from "../../utils/mutations";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";

function AddProject() {
  const [formState, setFormState] = useState({
    name: "",
    // placeholder ID
    owner: "613ff48a8f639d27a88c8753",
    description: "",
    image: "",
    reqFunds: "",
    tags: "",
    launch: "",
  });
  const [updateProject, { error, data }] = useMutation(UPDATE_PROJECT);
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
    console.log(formState);

    try {
      const { data } = await updateProject({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    //Render Project Component
    <Container className="bg-light p-3 my-5">
      <Form className="p-3" onSubmit={handleFormSubmit}>
        <h2>Edit Your Project</h2>
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
        {/* Use redirect on submit to redirect to AddTeammates Form */}
        <Button variant="primary" type="submit">
          Submit Project
        </Button>
      </Form>
    </Container>
  );
}

export default AddProject;

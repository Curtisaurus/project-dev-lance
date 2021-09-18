//add in useEffect
import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";
// change to useMutation from apollo
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
// import ADD_USER for try/catch/mutation
import { ADD_USER } from "../../utils/mutations";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    github: "",
    linkedin: ""
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);
  //add in useEffect hook
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      // used data instead and got rid of set show alert becuase of useEffect
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
    setUserFormData({
      username: "",
      email: "",
      password: "",
      github: "",
      linkedin: ""
    });
  };
  return (
    <>
      <Card className="p-3 m-5">
        {/* This is needed for the validation functionality above */}
        <Form
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
          className="p-4"
        >
          {/* show alert if server response is bad */}
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your signup!
          </Alert>

          {/* Username - Required */}
          <Form.Group>
            <Form.Label htmlFor="username">
              <FaUser className="mx-1" /> Username
            </Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            <Form.Control.Feedback type="invalid">
              Username is required!
            </Form.Control.Feedback>
          </Form.Group>

          {/* Email - Required */}
          <Form.Group>
            <Form.Label htmlFor="email">
              <FaEnvelope className="mx-1" /> Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder=""
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback>
          </Form.Group>

          {/* GitHub Profile - Not Required */}
          <Form.Group>
            <Form.Label htmlFor="github">
              <FaGithub className="mx-1" /> GitHub Profile (optional)
            </Form.Label>
            <Form.Control
              type="url"
              placeholder=""
              name="github"
              onChange={handleInputChange}
              value={userFormData.github}
            />
          </Form.Group>

          {/* LinkedIn Profile - Not Required */}
          <Form.Group>
            <Form.Label htmlFor="linkedin">
              <FaLinkedin className="mx-1" />
              LinkedIn Profile (optional)
            </Form.Label>
            <Form.Control
              type="url"
              placeholder=""
              name="linkedIn"
              onChange={handleInputChange}
              value={userFormData.linkedin}
            />
          </Form.Group>

          {/* Password - Required */}
          <Form.Group>
            <Form.Label htmlFor="password">
              <FaLock className="mx-1" /> Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            className="my-3"
            disabled={
              !(
                userFormData.username &&
                userFormData.email &&
                userFormData.password
              )
            }
            type="submit"
            variant="success"
          >
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};
export default SignupForm;

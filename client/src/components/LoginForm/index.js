//Added useEffect from react
import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Container, Card } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { FaEnvelope, FaLock } from "react-icons/fa";
//changed login to mutations instead of api
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";
const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  // useMutation login
  const [login, { error }] = useMutation(LOGIN);
  //bring in useEffect
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
    // no longer using loginUser, switch to data from userForm with try/catch
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    setUserFormData({
      email: "",
      password: "",
    });
  };
  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }
  //     const { token, user } = await response.json();
  //     console.log(user);
  //     Auth.login(token);
  //   } catch (err) {
  //     console.error(err);
  //     setShowAlert(true);
  //   }
  //   setUserFormData({
  //     username: '',
  //     email: '',
  //     password: '',
  //   });
  // };
  return (
    <>
      <Card className="p-3 m-5">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
          className="p-4"
        >
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your login credentials!
          </Alert>
          <Form.Group>
            <Form.Label htmlFor="email">
              <FaEnvelope className="mx-1" /> Email
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Your email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">
              <FaLock className="mx-1" /> Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
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
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
            variant="success"
            className="my-3"
          >
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};
export default LoginForm;

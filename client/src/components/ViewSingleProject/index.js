import React from "react";
// import { NavLink } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";
import {
  // Container,
  Form,
  Modal,
  Button,
  ListGroup,
  ProgressBar,
  Table,
  InputGroup,
  Image,
  Card,
} from "react-bootstrap";
import { FaGithub, FaLinkedin, FaUser, FaRocket } from "react-icons/fa";

function ViewSingleProject(props) {
  const { project } = props;

  // Use query
  // All props needed will be in the response from the query
  const { loading, data, error } = useQuery(QUERY_PROJECT, { variables: { project: project }});

  // Progress Bar Dynamic Label
  // const now = 60;
  // const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
  // render(progressInstance);

  if(!loading && !error) {

    let project = data.project;

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Image src="" fluid />
        <Modal.Header closeButton>
          <Modal.Title as="h1" id="contained-modal-title-vcenter" className="p-2">
            {project.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Button variant="success px-5 mb-3" id="button-addon2">
            Edit Project
          </Button>
          <h5 className="mb-3">
            <FaUser className="mx-1" /> Created by [firstName] [lastName] on
            [date].
          </h5>
          <h5 className="mt-3">
            <FaRocket className="mx-1" /> Product Launch Date: [launchdate]
          </h5>
          <Card className="bg-light p-4">
            <p>
              This is a project description. Cras mattis consectetur purus sit
              amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
              eros.
            </p>
          </Card>

          {/* Roles and Team Members Section */}
          <h3 className="mt-4">Project Development Team</h3>
          <Card className="bg-light p-4">
            <Form>
              <h5>Roles & Teammates</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <FaUser className="mx-1" /> Front-End Developer
                  <Button variant="outline-success" className="m-2">
                    Join Team
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaUser className="mx-1" /> Back-End Developer: Bryan Bentz{" "}
                  <FaGithub className="mx-1" />
                  <FaLinkedin className="mx-1" />
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaUser className="mx-1" /> Junior Developer: Jay Jenks{" "}
                  <FaGithub className="mx-1" />
                  <FaLinkedin className="mx-1" />
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaUser className="mx-1" /> UX Designer
                  <Button variant="outline-success" className="m-2">
                    Join Team
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaUser className="mx-1" /> Project Manager
                  <Button variant="outline-success" className="m-2">
                    Join Team
                  </Button>
                </ListGroup.Item>
              </ListGroup>
              <h5 className="mt-4">Position Openings: 2/5</h5>
            </Form>
          </Card>

          {/* Investors Section */}
          <h3 className="mt-4">Project Funding</h3>
          <Card className="bg-light p-4">
            <h5>Funding Goal: [Amount]</h5>
            <ProgressBar now={60} />

            <Form>
              <Form.Group className="mb-3" controlId="">
                <Form.Label className="h5 mt-4">Invest in the Project</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control
                    aria-label="Amount (to the nearest dollar)"
                    name=""
                    // value={formState.reqFunds}
                    // onChange={handleChange}
                  />
                  <Button variant="success px-5" id="button-addon2">
                    Invest
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>

            <h5 className="mt-4">Investors</h5>

            <Table responsive>
              <thead>
                <tr>
                  <th>Amount Invested</th>
                  <th>Investor Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$5,000</td>
                  <td>Username</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  } else {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title as="h1" id="contained-modal-title-vcenter" className="p-2">
            Loading...
          </Modal.Title>
        </Modal.Header>
      </Modal>
    )
  }
}

export default ViewSingleProject;

//   return (
//     <>
//       <Card className="my-3">
//         <NavLink to={`/projects/${_id}`}>
//           <Card.Body>
//             <Card.Title>{projectName}</Card.Title>
//             <Card.Text>
//               Created by {ownerName} on {date}.
//             </Card.Text>
//             <Card.Text>{description}</Card.Text>
//           </Card.Body>
//           <ListGroup className="list-group-flush">
//             <ListGroupItem>
//               Funding: ${acqFunds} / ${reqFunds}
//             </ListGroupItem>
//             <ListGroupItem>Launch Date: {launch}</ListGroupItem>
//           </ListGroup>
//         </NavLink>
//       </Card>
//     </>
//   );
// }

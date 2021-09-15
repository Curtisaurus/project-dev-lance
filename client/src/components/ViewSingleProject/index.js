import React from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";

function ViewSingleProject(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {}

export default ViewSingleProject;

// function ViewSingleProject(project) {
//   const {
//     _id,
//     image,
//     projectName,
//     ownerName,
//     date,
//     description,
//     reqFunds,
//     acqFunds,
//     launch,
//   } = project;

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

import React from "react";
import ProjectCard from "../ProjectCard";
// import { UPDATE_PROJECTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PROJECTS } from "../../utils/queries";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

// import { idbPromise } from '../../utils/helpers';
import spinner from "../../assets/images/spinner.gif";

function ViewAllProjectCards(props) {
  // const projects = [
  //   {
  //     name: "Best Project EVERRRRRR",
  //     owner: {
  //       username: "Hulk",
  //     },
  //     description: "Most complex project to solve your real world needs ever",
  //     image: "https://gfycat.com/anxiousilliteratebabirusa",
  //     reqFunds: "50000",
  //     acqFunds: "45000",
  //   },
  //   {
  //     name: "Wurst Project",
  //     owner: {
  //       username: "Spiderman",
  //     },
  //     description: "It says hello world barely",
  //     image: "https://gfycat.com/courteoushandmadebutterfly",
  //     reqFunds: "50000",
  //     acqFunds: "45000",
  //   },
  //   {
  //     name: "Ok Project",
  //     owner: {
  //       username: "Other Guy",
  //     },
  //     description: "Literally Minesweeper",
  //     image: "https://i.imgur.com/4zdNjKf.png",
  //     reqFunds: "50000",
  //     acqFunds: "45000",
  //   },
  // ];

  const { loading, data, error } = useQuery(QUERY_ALL_PROJECTS);

  if (error) {
    console.log("Error: " + error);
  }

  let projects = [];

  if (!loading && data.allProjects) {
    projects = data.allProjects;
  }

  function dateFormat(date) {
    let dateObj = new Date(parseInt(date));

    const options = { year: "numeric", month: "long", day: "numeric" };

    let formatted = dateObj.toLocaleDateString("en-US", options);

    return formatted;
  }

  return (
    <div>
      {/* Search Bar */}
      <Container fluid className="bg-light">
        <Container className="py-3 w-100 text-center">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for projects"
              aria-label="dev-role"
              aria-describedby="basic-addon2"
            />
            <DropdownButton
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">My Projects</Dropdown.Item>
              <Dropdown.Item href="#">My Investments</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <Button variant="success" id="button" className="w-50">
            Search
          </Button>
          <InputGroup className=""></InputGroup>
        </Container>
      </Container>

      {/* Project Cards */}
      <Container>
        <Row xs={1} md={2} lg={4} className="mx-4 my-4">
          {projects.length ? (
            <>
              {projects.map((project) => (
                <Col key={project._id}>
                  <ProjectCard
                    key={project._id}
                    _id={project._id}
                    image={project.image}
                    projectName={project.name}
                    ownerName={project.owner.username}
                    description={project.description}
                    reqFunds={project.reqFunds}
                    acqFunds={project.acqFunds}
                    date={dateFormat(project.createdAt)}
                    launch={dateFormat(project.launch)}
                    setModalShow={props.setModalShow}
                    setModalId={props.setModalId}
                  />
                </Col>
              ))}
            </>
          ) : (
            <h3>No projects yet!</h3>
          )}
        </Row>
      </Container>

      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ViewAllProjectCards;

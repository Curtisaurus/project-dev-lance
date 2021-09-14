import React from "react";
import ProjectItem from "../ProjectItem";
// import { UPDATE_PROJECTS } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALL_PROJECTS } from "../../utils/queries";
import { Container, Row, Col } from "react-bootstrap";

// import { idbPromise } from '../../utils/helpers';
// import spinner from "../../assets/images/spinner.gif";

function ProjectList() {
  const projects = [
    {
      name: "Best Project EVERRRRRR",
      owner: null,
      description: "Most complex project to solve your real world needs ever",
      image: "https://gfycat.com/anxiousilliteratebabirusa",
      reqFunds: "50000",
      acqFunds: "45000",
    },
    {
      name: "Wurst Project",
      owner: null,
      description: "It says hello world barely",
      image: "https://gfycat.com/courteoushandmadebutterfly",
      reqFunds: "50000",
      acqFunds: "45000",
    },
    {
      name: "Ok Project",
      owner: null,
      description: "Literally Minesweeper",
      image: "https://i.imgur.com/4zdNjKf.png",
      reqFunds: "50000",
      acqFunds: "45000",
    },
  ];
  const { loading, data } = useQuery(QUERY_ALL_PROJECTS);

  // let projects;

  // if (!loading) {
  //   projects = data.allProjects;
  // }

  return (
    <div className="my-2">
      <Container fluid>
        <Row>
          {projects.length ? (
            <>
              {projects.map((project) => (
                <Col>
                  <ProjectItem
                    key={project._id}
                    image={project.image}
                    projectName={project.name}
                    ownerName={project.owner}
                    description={project.description}
                    reqFunds={project.reqFunds}
                    acqFunds={project.acqFunds}
                  />
                </Col>
              ))}
            </>
          ) : (
            <h3>No projects yet!</h3>
          )}
        </Row>
      </Container>

      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default ProjectList;

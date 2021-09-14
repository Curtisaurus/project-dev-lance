import React from "react";
import ProjectItem from "../ProjectItem";
// import { UPDATE_PROJECTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PROJECTS } from "../../utils/queries";
import { Container, Row, Col } from "react-bootstrap";

// import { idbPromise } from '../../utils/helpers';
import spinner from "../../assets/images/spinner.gif";

function ProjectList() {
  // const projects = [
  //   {
  //     name: "Best Project EVERRRRRR",
  //     owner: {
  //       username: "Hulk"
  //     },
  //     description: "Most complex project to solve your real world needs ever",
  //     image: "https://gfycat.com/anxiousilliteratebabirusa",
  //     reqFunds: "50000",
  //     acqFunds: "45000",
  //   },
  //   {
  //     name: "Wurst Project",
  //     owner: {
  //       username: "Spiderman"
  //     },
  //     description: "It says hello world barely",
  //     image: "https://gfycat.com/courteoushandmadebutterfly",
  //     reqFunds: "50000",
  //     acqFunds: "45000",
  //   },
  //   {
  //     name: "Ok Project",
  //     owner: {
  //       username: "Other Guy"
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

  if(!loading && data.allProjects) {
    projects = data.allProjects
  }

  function dateFormat(date) {

    let dateObj = new Date(parseInt(date));

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    let formatted = dateObj.toLocaleDateString("en-US", options);

    return formatted;
  }

  return (
    <div className="my-2">
      <Container fluid>
        <Row>
          {projects.length ? (
            <>
              {projects.map((project) => (
                <Col key={project._id}>
                  <ProjectItem
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

export default ProjectList;

import React from "react";
import ProjectItem from "../ProjectItem";
// import { UPDATE_PROJECTS } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALL_PROJECTS } from "../../utils/queries";
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
<<<<<<< HEAD
      <h2>Our Products:</h2>
=======
      <h2>Dev Projects:</h2>
>>>>>>> 20a511f29457f2c3e3215b8cdd61d7b58b1252a4
      {projects.length ? (
        <div className="flex-row">
          {projects.map((project) => (
            <ProjectItem
              key={project._id}
              image={project.image}
              projectName={project.name}
              ownerName={project.owner}
              description={project.description}
              reqFunds={project.reqFunds}
              acqFunds={project.acqFunds}
            />
          ))}
        </div>
      ) : (
        <h3>No projects yet!</h3>
      )}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default ProjectList;

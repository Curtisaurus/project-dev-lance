import React from "react";
import ProjectItem from "../ProjectItem";
// import { UPDATE_PROJECTS } from "../../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ALL_PROJECTS } from "../../utils/queries";
// import { idbPromise } from '../../utils/helpers';
import spinner from "../../assets/images/spinner.gif";

function ProjectList() {
  const { loading, data } = useQuery(QUERY_ALL_PROJECTS);

  let projects
  
  if(!loading) {
    projects = data.allProjects
  }

  return (
    <div className="my-2">
      <h2>Dev Projects:</h2>
      {projects.length ? (
        <div className="flex-row">
          {projects.map((project) => (
            <ProjectItem
              key={project._id}
              image={project.image}
              projectName={project.name}
              ownerName={project.owner.name}
              description={project.description}
              reqFunds={project.reqFunds}
              acqFunds={project.acqFunds}
            />
          ))}
        </div>
      ) : (
        <h3>No projects yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProjectList;

import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {
          /* render ProjectItem components here */
          projects.map((project) => (
            <ProjectItem
              name={project.name}
              about={project.about}
              technologies={project.technologies}
              key={project.name}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ProjectList;

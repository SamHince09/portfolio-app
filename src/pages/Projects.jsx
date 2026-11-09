import { useEffect, useState } from 'react';
import { get, ref } from 'firebase/database';
import { Link } from 'react-router-dom';
import { database } from '../firebase';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await get(ref(database, 'projects'));

        if (response.exists()) {
          const projectData = response.val();

          const loadedProjects = Object.entries(projectData).map(
            ([id, project]) => ({
              id,
              ...project
            })
          );

          setProjects(loadedProjects);
        } else {
          setProjects([]);
        }
      } catch (error) {
        setError('Unable to load projects. Please try again later.');
      }

      setIsLoading(false);
    }

    fetchProjects();
  }, []);

  let projectsDisplay = null;

  if (isLoading) {
    projectsDisplay = <p>Loading projects...</p>;
  } else if (error) {
    projectsDisplay = <p>{error}</p>;
  } else if (projects.length === 0) {
    projectsDisplay = <p>No projects found.</p>;
  } else {
    projectsDisplay = (
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <Link to={`/projects/${project.id}`}>
              View Project Details
            </Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="projects-page">
      <div className="projects-heading">
        <p className="welcome-text">MY PROJECTS</p>
        <h1>My Projects</h1>
        <p>
          Here are some of the projects I have created
          while learning and developing my programming skills.
        </p>
      </div>

      {projectsDisplay}
    </section>
  );
}

export default Projects;

// Code developed with assistance from ChatGPT (November 2026).
// Prompt: Help retrieve and display portfolio projects from Firebase Realtime Database.
// Student Review: Reviewed and tested the component.

// Code developed with assistance from ChatGPT (November 2026).
// Prompt: Help me understand how I can use firebase to connect projects and display them in react
// Student Review: Reviewed the changes made and customized the page, still kinda confused

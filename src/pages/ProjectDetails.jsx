
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { get, ref } from 'firebase/database';
import { database } from '../firebase';

function ProjectDetails() {
  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await get(
          ref(database, `projects/${projectId}`)
        );

        if (response.exists()) {
          setProject(response.val());
        } else {
          setError('Project not found.');
        }
      } catch (error) {
        setError('Unable to load project details.');
      }

      setIsLoading(false);
    }

    fetchProject();
  }, [projectId]);

  if (isLoading) {
    return <p>Loading project details...</p>;
  }

  if (error) {
    return (
      <section className="project-details">
        <h1>{error}</h1>
        <Link to="/projects">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="project-details">
      <p className="welcome-text">PROJECT SPOTLIGHT ✨</p>

      <h1>{project.title}</h1>

      <p className="project-details-description">
        {project.description}
      </p>

      <div className="project-details-section">
        <h2>About This Project</h2>
        <p>{project.details}</p>
      </div>

      <div className="project-details-section">
        <h2>Technologies Used</h2>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <Link to="/projects" className="back-button">
        Back to Projects
      </Link>
    </section>
  );
}

export default ProjectDetails;

// Code developed with assistance from ChatGPT (November 2026).
// Prompt: help me firgure out how to display information from firebase.
// Student Review: Reviewed and tested the component.

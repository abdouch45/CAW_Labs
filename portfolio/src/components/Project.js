import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    screenshot: 'project1-screenshot.jpg', // Replace with the actual file path or URL
    demoLink: 'https://demo1.example.com',
    repoLink: 'https://github.com/example/project1',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  // Add more projects with similar structure
];

const ProjectShowcase = () => {
  return (
    <div className="project-showcase">
      <h2>Project Showcase</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.screenshot} alt={`Screenshot of ${project.title}`} />
          <div>
            <strong>Technologies used:</strong> {project.technologies.join(', ')}
          </div>
          <div>
            <strong>Demo:</strong>{' '}
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
          <div>
            <strong>Repository:</strong>{' '}
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
import { projects } from '../config';
import { ProjectItem } from './ProjectItem';

export const Projects = () => (
  <ul>
    {projects.map(project => (
      <ProjectItem key={project.title} {...project} />
    ))}
  </ul>
);

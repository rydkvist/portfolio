import { projects } from '../config';
import { ProjectItem } from './ProjectItem';

export const Projects = () => (
  <ul className="space-y-16">
    {projects.map(project => (
      <ProjectItem key={project.title} {...project} />
    ))}
  </ul>
);

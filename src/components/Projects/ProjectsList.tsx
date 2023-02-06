import { projects } from '../../db';
import { ProjectItem } from './ProjectItem';

export const ProjectsList = () => {
  return (
    <ul>
      {projects.map(project => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </ul>
  );
};

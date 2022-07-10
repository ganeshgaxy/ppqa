import React from 'react';
//import { useLiveQuery } from 'dexie-react-hooks';
import { ProjectList } from '../components/projects/projectList';

const Projects = () => {
  const projects = undefined;
  //const projects = useLiveQuery(() => performanceDb.projects.toArray());
  if (projects) return <ProjectList data={projects} />;
  else return <div></div>;
};

export default Projects;

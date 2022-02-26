// Creating nodes based on my projects and appending them to the DOM
import { projects } from './projects.js';

const main = () => {
  const url = new URL(window.location.href);
  const param = url.searchParams.get('id');
  const project = getProject(param);
  console.log(project);
  title(project.name);
};

const getProject = id => {
  for (const project of projects) {
    if (project.param === id) {
      return project;
    }
  }
};

const title = projectName => {
  const h1 = document.getElementById('project-title');
  h1.innerText = projectName;
};

main();

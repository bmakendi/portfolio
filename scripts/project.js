// Creating nodes based on my projects and appending them to the DOM
import { projects } from './projects.js';

const main = () => {
  const url = new URL(window.location.href);
  const param = url.searchParams.get('id');
  const project = getProject(param);
  console.log(project);
  title(project.name);
  githubLink(project.githubLink);
  websiteLink(project.webLink);
  technosList(project.technos);
  projectDescription(project.description);
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

const githubLink = projectGithub => {
  const ghLink = document.getElementById('github-link');
  ghLink.setAttribute('href', projectGithub);
};

const websiteLink = projectWebsite => {
  if (projectWebsite === '') return;
  const linksContainer = document.getElementById('project-links');
  const webLinkContainer = document.createElement('p');
  const webLink = document.createElement('a');

  webLinkContainer.classList.add('project__link', 'project__link--website');
  webLink.setAttribute('href', projectWebsite);
  webLink.setAttribute('target', 'blank');
  webLink.setAttribute('rel', 'noopener noreferrer');
  webLink.innerText = 'Website link';

  webLinkContainer.appendChild(webLink);
  linksContainer.appendChild(webLinkContainer);
};

const technosList = technos => {
  const listContainer = document.getElementById('technos');

  for (const techno of technos) {
    const listItem = document.createElement('li');
    const itemChip = document.createElement('img');

    listItem.classList.add('project__techno');
    itemChip.setAttribute('src', 'assets/design/chip.png');
    itemChip.setAttribute('alt', 'Gradient decoration');
    itemChip.classList.add('project__techno--chip');

    listItem.appendChild(itemChip);
    listItem.insertAdjacentText('beforeend', techno);
    listContainer.appendChild(listItem);
  }
};

const projectDescription = description => {
  const descriptionContainer = document.getElementById('project-description');
  descriptionContainer.innerText = description;
};

main();

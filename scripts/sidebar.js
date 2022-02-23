const landing = document.getElementById('landing');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const anchorLanding = document.querySelector('.sidebar-landing');
const anchorAbout = document.querySelector('.sidebar-about');
const anchorProjects = document.querySelector('.sidebar-projects');
const anchorContact = document.querySelector('.sidebar-contact');

const sidebarHandling = () => {
  let i;
  const landingObserver = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) anchorLanding.classList.add('active');
      else anchorLanding.classList.remove('active');
    },
    { threshold: 0.1 }
  );
  const aboutObserver = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) anchorAbout.classList.add('active');
      else anchorAbout.classList.remove('active');
    },
    { threshold: 0.1 }
  );
  const projectsObserver = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) anchorProjects.classList.add('active');
      else anchorProjects.classList.remove('active');
    },
    { threshold: 0.1 }
  );
  const contactObserver = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) anchorContact.classList.add('active');
      else anchorContact.classList.remove('active');
    },
    { threshold: 0.1 }
  );

  landingObserver.observe(landing);
  aboutObserver.observe(about);
  projectsObserver.observe(projects);
  contactObserver.observe(contact);
};

sidebarHandling();

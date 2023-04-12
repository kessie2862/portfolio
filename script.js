const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav__items');
const overlay = document.querySelector('.overlay');

// open nav menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
  overlay.classList.remove('hidden');

  // Prevent scrolling when overlay is active
  document.body.style.overflow = 'hidden';
});

// close nav menu function
const closeNavMenu = () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
  overlay.classList.add('hidden');

  // Enable scrolling when overlay is inactive
  document.body.style.overflow = 'scroll';
};

closeBtn.addEventListener('click', () => {
  closeNavMenu();
});

// close nav menu when any nav Items is clicked on tablets and mobile
const navItems = document.querySelectorAll('nav__items li a');
if (window.innerWidth < 767) {
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      closeNavMenu();
    });
  });

  // hide nav items when clicked
  menu.addEventListener('click', () => {
    menu.style.display = 'none';
    document.body.style.overflow = 'scroll';
    overlay.classList.add('hidden');
    menuBtn.style.display = 'block';
  });
}

// POPUP MODAL

const projects = [
  {
    name: 'Project 1',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required..',
    image: 'project1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
  },
  {
    name: 'Project 2',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required..',
    image: 'project2.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
  },
  {
    name: 'Project 3',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required..',
    image: 'project3.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
  },
];

const projectsContainer = document.querySelector('.projects-container');
const popupContainer = document.querySelector('.project-popup');
// const popup = document.querySelectorAll('.popup');

// Dynamically create the projects section
projects.forEach((project) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  projectDiv.innerHTML = `
    <img src="${project.image}" alt="${project.name}">
    <div class="details" data-name="${project.name}">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="technologies">
        ${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}
      </div>
    </div>
  `;
  projectsContainer.appendChild(projectDiv);
});

// Add click event listeners to project details
document.querySelectorAll('.projects .details').forEach((project) => {
  project.onclick = () => {
    popupContainer.style.display = 'block';
    const target = project.getAttribute('data-name');
    const popupToShow = popupContainer.querySelector(
      `.popup[data-target="${target}"]`,
    );
    if (popupToShow) {
      popupToShow.classList.add('active');
    }
  };
});

// Add click event listener to popup close button for all popups
document.querySelectorAll('.popup #close-btn').forEach((btn) => {
  btn.onclick = () => {
    btn.closest('.popup').classList.remove('active');
    popupContainer.style.display = 'none';
  };
});

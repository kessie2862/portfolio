const projectsSide = document.querySelector('.projects');
const modal = document.querySelector('#modal');

const projects = [
  {
    id: 1,
    name: 'Tonic',
    desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featureImg: 'images/Snapshoot-Portfolio.png',
    technology: ['html', 'css', 'javascript'],
    platform: 'CANOPY',
    stack: 'Back End Dev',
    year: 2015,
    liveLink: '#',
    linkSource: '#',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    desc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featureImg: 'images/Snapshoot-Portfolio1.png',
    technology: ['html', 'Ruby on Rails', 'css', 'javascript'],
    platform: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: 2015,
    liveLink: '#',
    linkSource: '#',
  },
  {
    id: 3,
    name: 'Facebook 360',
    desc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featureImg: 'images/Snapshoot-Portfolio2.png',
    technology: ['html', 'Ruby on Rails', 'css', 'javascript'],
    platform: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: 2015,
    liveLink: '#',
    linkSource: '#',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    desc: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featureImg: 'images/Snapshoot-Portfolio3.png',
    technology: ['html', 'Ruby on Rails', 'css', 'javascript'],
    platform: 'Uber',
    stack: 'Lead Developer',
    year: 2018,
    liveLink: '#',
    linkSource: '#',
  },
];

function generateProduct() {
  projectsSide.innerHTML = projects
    .map(
      (product) => `
      <div class="details">
            <img src=${product.featureImg} alt="" />

            <div class="card-info">
              <h2>${product.name}</h2>

              <div class="title-and-date">
                <p class="title">CANOPY</p>
                <span></span>
                <p class="muted">${product.stack}</p>
                <span></span>
                <p class="muted">${product.year}</p>
              </div>

              <p class="description">${product.desc}</p>

              <ul class="stack">
                ${product.technology.map((x) => `<li>${x}</li>`).join('')}
              </ul>

              <a class="detail-btn btn" id=${
  product.id
} href="#">See projects</a>
            </div>
          </div>
`,
    )
    .join('');
}

projectsSide.addEventListener('click', (e) => {
  if (e.target.classList.contains('detail-btn')) {
    modal.style.display = 'block';
    const id = parseFloat(e.target.id);
    const search = projects.find((x) => x.id === id);
    if (search !== undefined) {
      modal.innerHTML = `
       <div class="popup"">
        <div class="header-close modal-container">
          <h3 class="popup-title">${search.name}</h3>
          <i id="close-btn" class="uil uil-multiply"></i>
        </div>
        <div class="title-and-date modal-container">
          <p class="title">${search.platform}</p>
          <span></span>
          <p class="muted">${search.stack}</p>
          <span></span>
          <p class="muted">${search.year}</p>
        </div>

        <div class="card-info modal-container">
          <img class="main-img" src=${search.featureImg} alt="" />

          <div class="switch">
            <div class="description">
              <p>
               ${search.desc}
              </p>

              <p class="hide">
              ${search.desc}
              </p>
            </div>

            <div class="stack-and-buttons">
              <ul class="stack">

                  ${search.technology.map((x) => `<li>${x}</li>`).join('')}
              </ul>

              <div class="buttons">
                <a href="#" class="see-live"
                  ><img src="./images/Enabled1.png" alt="see live"
                /></a>

                <a href="#" class="see-source"
                  ><img src="./images/Enabled.png" alt="see source"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    `;
    }
  }
  generateProduct();
});

modal.addEventListener('click', (e) => {
  if (e.target.id === 'close-btn') {
    modal.style.display = 'none';
  }
  generateProduct();
});

generateProduct();

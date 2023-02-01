const featureLink = document.querySelector('a.arrow-down-feature');
const menuFeature = document.querySelector('ul.mini__menu-feature');
const featureImg = document.querySelector('.arrow-img-feature');

const companyLink = document.querySelector('a.arrow-down-company');
const menuCompany = document.querySelector('ul.mini__menu-company');
const companyImg = document.querySelector('.arrow-img-company')

featureLink.addEventListener("click", () => {
  menuFeature.classList.toggle('active');
  if (menuFeature.classList[1] === 'active') {
    featureImg.src = '../assets/images/icon-arrow-up.svg';
  } else {
    featureImg.src = '../assets/images/icon-arrow-down.svg';
  }
});


companyLink.addEventListener("click", () => {
  menuCompany.classList.toggle('active');
  if (menuCompany.classList[1] === 'active') {
    companyImg.src = '../assets/images/icon-arrow-up.svg';
  } else {
    companyImg.src = '../assets/images/icon-arrow-down.svg';
  }
});


//ainda falta mudar icone de seta para baixo para seta para cima 
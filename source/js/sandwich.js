const sandwich = document.querySelector('.btn-toggle');
const nav = document.querySelector('.nav');

const getToggleSandwich = () => {
  sandwich.addEventListener('click', () => {
    if (sandwich.classList.contains('btn-toggle--open')) {
      sandwich.classList.remove('btn-toggle--open');
      sandwich.classList.add('btn-toggle--closed');
      nav.classList.remove('nav--hide');
    } else {
      sandwich.classList.remove('btn-toggle--closed');
      sandwich.classList.add('btn-toggle--open');
      nav.classList.add('nav--hide');
    }
  });
};

export {getToggleSandwich};

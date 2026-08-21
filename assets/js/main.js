const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const projectShelves =
  document.querySelectorAll('.project-shelf');

projectShelves.forEach((shelf) => {

  const carousel =
    shelf.querySelector('.project-carousel');

  const previousButton =
    shelf.querySelector('.carousel-button.prev');

  const nextButton =
    shelf.querySelector('.carousel-button.next');


  if (
    !carousel ||
    !previousButton ||
    !nextButton
  ) {
    return;
  }


  const getScrollAmount = () => {

    const card =
      carousel.querySelector('.catalog-card');

    if (!card) {
      return 320;
    }

    const styles =
      window.getComputedStyle(carousel);

    const gap =
      parseFloat(styles.columnGap) || 24;

    return (
      card.getBoundingClientRect().width
      + gap
    );
  };


  previousButton.addEventListener(
    'click',
    () => {

      carousel.scrollBy({
        left: -getScrollAmount(),
        behavior: 'smooth'
      });

    }
  );


  nextButton.addEventListener(
    'click',
    () => {

      carousel.scrollBy({
        left: getScrollAmount(),
        behavior: 'smooth'
      });

    }
  );

});

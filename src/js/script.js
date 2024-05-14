// script.js

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');
  const indicators = document.querySelectorAll('.slide-indicator span');
  const imgContainers = document.querySelectorAll('.slider-img-container');
  let currentIndex = 0;

  function updateSlider(index) {
    const offset = index * -100;
    sliders.forEach((slider) => {
      slider.style.transform = `translateX(${offset}%)`;
    });
    indicators.forEach((indicator) => {
      indicator.classList.remove('active');
    });
    indicators[index].classList.add('active');
  }

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      const index = parseInt(indicator.dataset.index);
      currentIndex = index;
      updateSlider(index);
    });
  });

  imgContainers.forEach((imgContainer) => {
    imgContainer.addEventListener('click', () => {
      const index = parseInt(imgContainer.dataset.index);
      currentIndex = index;
      updateSlider(index);
    });
  });

  // Initial display
  updateSlider(currentIndex);
});

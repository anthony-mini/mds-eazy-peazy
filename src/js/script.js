// script.js

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');
  const indicators = document.querySelectorAll('.slide-indicator span');
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

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateSlider(index);
    });
  });

  // Initial display
  updateSlider(currentIndex);
});

const imageBefore = document.querySelector('.example__difference-image-wrapper--before');
const imageAfter = document.querySelector('.example__difference-image-wrapper--after');

const sliderBefore = document.querySelector('.example__difference-slider-button--before');
const sliderAfter = document.querySelector('.example__difference-slider-button--after');

const sliderBar = document.querySelector('.example__difference-slider-bar');

sliderBefore.addEventListener('click', function() {
  if (imageBefore.classList.contains('example__difference-image-wrapper--hidden')) {
    imageBefore.classList.remove('example__difference-image-wrapper--hidden');
    imageAfter.classList.add('example__difference-image-wrapper--hidden');

    sliderAfter.classList.remove('example__difference-slider-button--pressed');
    sliderBefore.classList.add('example__difference-slider-button--pressed');

    sliderBar.classList.remove('example__difference-slider-bar--after');
    sliderBar.classList.add('example__difference-slider-bar--before');
  }
});

sliderAfter.addEventListener('click', function() {
  if (imageAfter.classList.contains('example__difference-image-wrapper--hidden')) {
    imageAfter.classList.remove('example__difference-image-wrapper--hidden');
    imageBefore.classList.add('example__difference-image-wrapper--hidden');

    sliderBefore.classList.remove('example__difference-slider-button--pressed');
    sliderAfter.classList.add('example__difference-slider-button--pressed');

    sliderBar.classList.remove('example__difference-slider-bar--before');
    sliderBar.classList.add('example__difference-slider-bar--after');
  }
});

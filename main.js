import './style.css';

// Select Elements from the DOM
const switchEl = document.querySelector('.switch');

const toggleSwitch = function () {
  const annualInput = document.getElementById('annually');
  const slider = document.querySelector('.slider');
  if (annualInput.checked) {
    slider.style.setProperty('--left', '-26px');
  } else {
    slider.style.setProperty('--left', '0');
  }
};

// Add an event listener to the slider
switchEl.addEventListener('click', toggleSwitch);

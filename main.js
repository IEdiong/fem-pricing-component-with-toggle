import './style.css';

// Select Elements from the DOM
const switchEl = document.querySelector('.switch');
const basicPrice = document.getElementById('price-basic');
const  proPrice = document.getElementById('price-professional');
const masterPrice = document.getElementById('price-master');

const toggleSwitch = function () {
  const annualInput = document.getElementById('annually');
  const slider = document.querySelector('.slider');
  if (annualInput.checked) {
    slider.style.setProperty('--left', '-26px');

    // Update price in the UI
    basicPrice.textContent = 199.99;
    proPrice.textContent = 249.99;
    masterPrice.textContent = 399.99;
  } else {
    slider.style.setProperty('--left', '0');

    // Update price in the UI
    basicPrice.textContent = 19.99;
    proPrice.textContent = 24.99;
    masterPrice.textContent = 39.99;
  }
};

// Add an event listener to the slider
switchEl.addEventListener('click', toggleSwitch);

// listen for space bar press
// window.addEventListener('keydown', (e) => 
// {
//   if (e.key === ' ') toggleSwitch();
// })
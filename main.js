import './style.css';

// Select Elements from the DOM
const switchEl = document.querySelector('.switch');
const basicPrice = document.getElementById('price-basic');
const proPrice = document.getElementById('price-professional');
const masterPrice = document.getElementById('price-master');

const annualInput = document.getElementById('annually');

// state management
let isMonthly = true;

const toggleSwitch = function () {
  const slider = document.querySelector('.slider');
  if (annualInput.checked) {
    // slider.style.setProperty('--left', '-26px');
    slider.classList.toggle('active');
    
    // Update price in the UI
    basicPrice.textContent = '199.99';
    proPrice.textContent = '249.99';
    masterPrice.textContent = '399.99';
  } else {
    // slider.style.setProperty('--left', '0');
    slider.classList.toggle('active');

    // Update price in the UI
    basicPrice.textContent = '19.99';
    proPrice.textContent = '24.99';
    masterPrice.textContent = '39.99';
  }
};

// Add an event listener to the slider
switchEl.addEventListener('click', toggleSwitch);

// listen for the Enter key press
window.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.key === 'Enter') {
    annualInput.checked = annualInput.checked ? !isMonthly : isMonthly;

    toggleSwitch();
  }
});

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav__items');
const overlay = document.querySelector('.overlay');

// open nav menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
  overlay.classList.remove('hidden');

  // Prevent scrolling when overlay is active
  document.body.style.overflow = 'hidden';
});

// close nav menu function
const closeNavMenu = () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
  overlay.classList.add('hidden');

  // Enable scrolling when overlay is inactive
  document.body.style.overflow = 'scroll';
};

closeBtn.addEventListener('click', () => {
  closeNavMenu();
});

// close nav menu when any nav Items is clicked on tablets and mobile
const navItems = document.querySelectorAll('nav__items li a');
if (window.innerWidth < 767) {
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      closeNavMenu();
    });
  });

  // hide nav items when clicked
  menu.addEventListener('click', () => {
    menu.style.display = 'none';
    document.body.style.overflow = 'scroll';
    overlay.classList.add('hidden');
    menuBtn.style.display = 'block';
  });
}

// FORM VALIDATION

// Get the submit button, name, email, message input elements and form
const submitButton = document.getElementById('submit-btn');
const fullNameInput = document.getElementById('fullName');
const messageInput = document.getElementById('message');
const emailInput = document.getElementById('email');
const form = document.getElementById('form');

// Get the error elements for name, email and message fields
const messageError = document.getElementById('messageError');
const emailError = document.getElementById('emailError');
const fullNameError = document.getElementById('fullNameError');

// Define a function to reset input errors after 3 seconds
const resetInputError = (inputElement, errorElement) => {
  setTimeout(() => {
    inputElement.style.border = 'none';
    errorElement.style.display = 'none';
  }, 2000);
};

// Add an event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Define a regular expression for email validation
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

  // Validate the name field
  if (fullNameInput.value === '') {
    fullNameError.textContent = 'Name cannot be empty.';
    fullNameInput.style.border = '2px solid red';
    fullNameError.style.display = 'block';
    resetInputError(fullNameInput, fullNameError);
  } else if (emailInput.value === '') {
    emailError.textContent = 'Email Field cannot be empty';
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'block';
    resetInputError(emailInput, emailError);
  } else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Enter a valid email in lowercase';
    emailInput.style.border = '2px solid red';
    emailError.style.display = 'block';
    resetInputError(emailInput, emailError);
  } else if (messageInput.value === '') {
    messageError.textContent = 'Message is Required';
    messageInput.style.border = '2px solid red';
    messageError.style.display = 'block';
    resetInputError(messageInput, messageError);
  } else if (messageInput.value.length > 500) {
    messageError.textContent = 'Message cannot exceed 500 Characters';
    messageInput.style.border = '2px solid red';
    messageError.style.display = 'block';
    resetInputError(messageInput, messageError);
  } else {
    messageError.textContent = 'Message Sent';
    messageError.style.color = 'green';
    messageError.style.display = 'block';
    form.submit();
    fullNameInput.value = '';
    messageInput.value = '';
    emailInput.value = '';
  }
});

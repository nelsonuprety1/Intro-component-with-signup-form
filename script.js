// Tasks
/**
 *check if all the fields are filled
 first name cannot be empty
 last name cannot be empty
    email cannot be invalid email
    password cannot be empty

    if all the fields are filled submit will do nothing
    if any of the fields are empty error message will be displayed
 */
'use strict';
const form = document.querySelector('#form');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const errFirst = document.querySelector('.err-first');
const errLast = document.querySelector('.err-last');
const errEmail = document.querySelector('.err-email');
const errPass = document.querySelector('.err-pass');
const errImage = document.querySelectorAll('.error-img');

form.addEventListener('submit', event => {
  event.preventDefault();
  const isFirstNameValid = firstNameInput.value.trim() !== '';
  const isLastNameValid = lastNameInput.value.trim() !== '';
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    emailInput.value.trim()
  );
  const isPasswordValid = passwordInput.value.trim() !== '';

  /**
   Nodelist (errImage) is used to select all elements with class 
   .error-img and then setting the visibility of each 
 individual error image based on the validity of its 
 corresponding field.
 */

  if (!isFirstNameValid) {
    errFirst.style.visibility = 'visible';
    errImage[0].style.visibility = 'visible';
    firstNameInput.style.border = '1px solid red';
  } else {
    errFirst.style.visibility = 'hidden';
    errImage[0].style.visibility = 'hidden';
  }

  if (!isLastNameValid) {
    errLast.style.visibility = 'visible';
    errImage[1].style.visibility = 'visible';
    lastNameInput.style.border = '1px solid red';
  } else {
    errLast.style.visibility = 'hidden';
    errImage[1].style.visibility = 'hidden';
  }

  if (!isEmailValid) {
    errEmail.style.visibility = 'visible';
    errImage[2].style.visibility = 'visible';
    emailInput.style.border = '1px solid red';
  } else {
    errEmail.style.visibility = 'hidden';
    errImage[2].style.visibility = 'hidden';
  }

  if (!isPasswordValid) {
    errPass.style.visibility = 'visible';
    errImage[3].style.visibility = 'visible';
    passwordInput.style.border = '1px solid red';
  } else {
    errPass.style.visibility = 'hidden';
    errImage[3].style.visibility = 'hidden';
  }

  if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
    form.reset();
  }
});

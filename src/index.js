// Test import of a JavaScript module
// import { example } from '@/js/example'

import '@/styles/index.scss'

const showLoginButton = document.querySelector('#showLogin')
const loginForm = document.querySelector('#loginForm')
showLoginButton.addEventListener('click', () => {
  loginForm.classList.add('open');
})


const slider = document.querySelector('#slider')
const nextButton = document.querySelector('#next')
let form = document.querySelector('#registration')
let inputText = document.querySelector('#address')
let inputEmail = document.querySelector('#email')
let inputPass = document.querySelector('#password')
let count = 1
let addressErrorText = document.querySelector('#slide3 .form-error')
let emailErrorText = document.querySelector('#slide4 .form-error')
let passwordErrorText = document.querySelector('#slide5 .form-error')

const validation = (elem) => {
  const logJSONData = async (e, num) => {
    const response = await fetch("http://www.mocky.io/v2/5dfcef48310000ee0ed2c281");
    const errorsData = await response.json();
    console.log(errorsData.errors[num].message);
    e.innerHTML = errorsData.errors[num].message
  }
  // logJSONData()

  let result = true
  let regexForEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


  if (elem.value === '') {
    console.log('error')
    form.setAttribute('data-error', 'error')
    result = false
  } else {
    form.setAttribute('data-error', '')
  }

  if (elem.getAttribute('name') === 'address') {
    if (elem.value === '') {
      console.log('address')
      form.setAttribute('data-error', 'error')
      logJSONData(addressErrorText, 3)
      result = false
    }  else {
      form.setAttribute('data-error', '')
    }
  }
  if (elem.getAttribute('name') === 'email') {
    if (!regexForEmail.test(elem.value)) {
      console.log('email')
      form.setAttribute('data-error', 'error')
      logJSONData(emailErrorText, 1)
      result = false
    }  else {
      form.setAttribute('data-error', '')
    }
  }
  if (elem.getAttribute('name') === 'password') {
    if (elem.value.length < 5) {
      console.log(elem.value.length)
      console.log('password')
      form.setAttribute('data-error', 'error')
      logJSONData(passwordErrorText, 2)
      result = false
    }  else {
      form.setAttribute('data-error', '')
    }
  }

}
nextButton.addEventListener('click', () => {

  if (slider.getAttribute('data-step') === 'slide1') {
    console.log('test' + count)
  }
  if (slider.getAttribute('data-step') === 'slide2') {
    console.log('test' + count)
  }
  if (slider.getAttribute('data-step') === 'slide3') {
    console.log('test' + count)
    validation(inputText)

  }
  if (slider.getAttribute('data-step') === 'slide4') {
    console.log('test' + count)
    validation(inputEmail)
  }
  if (slider.getAttribute('data-step') === 'slide5') {
    console.log('test bar' + count)
    validation(inputPass)
    // form.submit()
  }
  if (form.getAttribute('data-error') === '') {
    count = count + 1;
    slider.setAttribute('data-step', 'slide' + count)
  }

})

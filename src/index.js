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

const validation = (elem) => {
  const logJSONData = async () => {
    const response = await fetch("http://www.mocky.io/v2/5dfcef48310000ee0ed2c281");
    const errorsData = await response.json();
    console.log(errorsData.errors[0].message);
  }
  logJSONData()

  let result = true
  let regexForEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


  if (elem.value == '') {
    console.log('error')
    form.setAttribute('data-error', 'error')
    result = false
  } else {
    form.setAttribute('data-error', '')
  }
  if (elem.getAttribute('name') === 'email') {
    if (!regexForEmail.test(elem.value)) {
      console.log('email')
      form.setAttribute('data-error', 'error')
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
      result = false
    }  else {
      form.setAttribute('data-error', '')
    }
  }
  // if ( elem.value == '' || elem.getAttribute('name') === 'email' && !regexForEmail.test(elem.value)) {
  //   console.log('email')
  //   form.setAttribute('data-error', 'error')
  //   result = false
  // }  else {
  //   form.setAttribute('data-error', '')
  // }

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

// Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo
//
// const heading = document.createElement('h1')
// heading.textContent = example()
//
// // Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')
//
// // Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'
//
// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)

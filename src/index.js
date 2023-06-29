// Test import of a JavaScript module
// import { example } from '@/js/example'
//
// // Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

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
  let result = true

  if (elem.value == '') {
    console.log('error')
    form.setAttribute('data-error', 'error')
    result = false
  } else {
    form.setAttribute('data-error', '')
  }
}
nextButton.addEventListener('click', (e) => {

  // nextButton.innerHTML=count
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
    form.submit()
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

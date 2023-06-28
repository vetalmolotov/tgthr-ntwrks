// Test import of a JavaScript module
// import { example } from '@/js/example'
//
// // Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'
// import { test } from 'http://www.mocky.io/v2/5dfcef48310000ee0ed2c281'

// Test import of styles
import '@/styles/index.scss'



const showLoginButton = document.querySelector('#showLogin')
const loginForm = document.querySelector('#loginForm')
showLoginButton.addEventListener('click', () => {
  loginForm.classList.add('open');
})

const slider = document.querySelector('#slider')
const next = document.querySelector('#next')
const slide1 = document.querySelector('#slide1')
const slide2 = document.querySelector('#slide2')
const slide3 = document.querySelector('#slide3')
const slide4 = document.querySelector('#slide4')
const slide5 = document.querySelector('#slide5')
let color = true
next.addEventListener('click', () => {
  // if (slider.classList.contains('slide1')) {
  if (color) {
    slide1.classList.remove('show')
    slide1.classList.add('hide')
    slide2.classList.add('show')
    slider.classList.remove('slide1')
    slider.classList.add('slide2')
    next.classList.add('next3')
  }

  // if (next.classList.contains('next3')) {
  if (!color) {
    if ( slider.classList.contains('slide2') ) {
      slide2.classList.remove('show')
      slide2.classList.add('hide')
      slide3.classList.add('show')
      slider.classList.remove('slide2')
      slider.classList.add('slide3')
    }
  }
  if (color) {
    if ( slider.classList.contains('slide3') ) {
      slide3.classList.remove('show')
      slide3.classList.add('hide')
      slide4.classList.add('show')
      slider.classList.remove('slide3')
      slider.classList.add('slide4')
    }
  }
  color = !color;
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

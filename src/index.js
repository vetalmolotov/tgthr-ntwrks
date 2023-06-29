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
let count = 1
nextButton.addEventListener('click', (e) => {
  count = count + 1;
  // nextButton.innerHTML=count
  slider.setAttribute('data-step', 'slide' + count)

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

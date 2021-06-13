const elhamburgerBTN = document.querySelector('.button-hamburger')
const elHeader = document.querySelector('.site-header')

elhamburgerBTN.addEventListener('click', function () { elHeader.classList.toggle('header-adaptiv') })

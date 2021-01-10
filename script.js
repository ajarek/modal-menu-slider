const navbar = document.querySelector('.navbar')
const iks = document.querySelector('.awesomeX')
const ham = document.querySelector('.awesome')
ham.addEventListener('click',()=>{
    navbar.classList.add('active')
})
iks.addEventListener('click',()=>{
    navbar.classList.remove('active')
})
const navbar = document.querySelector('.navbar')
const iks = document.querySelector('.awesomeX')
const ham = document.querySelector('.awesome')
ham.addEventListener('click',()=>{
    navbar.classList.add('active')
})
iks.addEventListener('click',()=>{
    navbar.classList.remove('active')
})
  
const btn = document.querySelector('.btn');
const form = document.querySelector('.form')
const fas = document.querySelector('.headerForm i')
btn.addEventListener('click',()=>{
form.classList.add('active1')
})

fas.addEventListener('click',()=>{
    form.classList.remove('active1')
    })
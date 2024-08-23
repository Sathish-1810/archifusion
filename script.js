// script.js

const menuToggle = document.querySelector('#menubutton'); 
const nlinks = document.getElementById('nlinks'); 

menuToggle.addEventListener('click',  () =>{
    console.log('Menu Toggle Clicked')
    nlinks.classList.toggle('active'); 
    console.log(nlinks.classList);
});
nlinks.addEventListener('click', function () {
    console.log('Menu Toggle Clicked')
    nlinks.classList.remove("active");
    console.log(nlinks.classList);
});


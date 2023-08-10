// Smooth scrolling
// document.addEventListener('DOMContentLoaded', function() {
//   const navLinks = document.querySelectorAll('nav a');
  
//   navLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//       e.preventDefault();
//       const targetSection = document.querySelector(link.getAttribute('href'));
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     });
//   });
// });
// Activate Link on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = ()=>{
  sections.forEach( sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height){
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
        
      });
    };
  });
};












// const customLinkDiv = document.getElementById('customLinkDiv');

// customLinkDiv.addEventListener('click', function() {
//   window.location.href = 'https://www.google.com'; // Replace with your desired URL
// });
const customLinkDivs = document.querySelectorAll('#customLinkDiv');

customLinkDivs.forEach(div => {
  div.addEventListener('click', function() {
    window.location.href = 'https://www.example.com'; // Replace with your desired URL
  });
});

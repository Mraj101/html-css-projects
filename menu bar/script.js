const toggleButton=document.querySelector('.toggle-button');
const links=document.querySelector('.navigate')
toggleButton.addEventListener('click',()=>{
   links.classList.toggle('active')
});
const menu_bar=document.querySelector("#header .nav-list .menu-bars");
const menu=document.querySelector("#header .nav-list ul")
menu_bar.addEventListener('click',()=>{
  menu_bar.classList.toggle('active');
  menu.classList.toggle('active');
});
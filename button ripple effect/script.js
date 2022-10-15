const btnEle=document.querySelector('.btnElement');

btnEle.addEventListener('mouseover',(e)=>{
    const x=(e.pageX-btnEle.offsetLeft);
    const y=(e.pageY-btnEle.offsetTop);

    btnEle.style.setProperty("--posX",x +"px");
    btnEle.style.setProperty("--posY",y +"px");

})
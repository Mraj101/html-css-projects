//starting here
const bgElement=document.getElementById("img-Id");

window.addEventListener('scroll',()=>{
    let opacityPercentage=1-window.pageYOffset/600;
    let bgSize=100-window.pageYOffset/60;
    console.log(bgSize)
    bgElement.style.opacity=opacityPercentage
    bgElement.style.backgroundSize=bgSize+"%";
})
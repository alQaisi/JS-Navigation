const toggleNav=()=>{
    menuBars.classList.toggle("change")
    overlay.style.opacity="1";
    if(overlay.classList.length===2){
        overlay.classList.add("overlay-slide-right");
        navSlider('out','in');
    }else{
        overlay.classList.remove("overlay-slide-right");
        navSlider('in','out');
    }
}
const navSlider=(previous,next)=>{
    next==='in'?document.body.style.overflowY="hidden":document.body.style.overflowY="scroll";
    navs.forEach((nav,index)=>{
        nav.classList.replace(`slide-${previous}-${index+1}`,`slide-${next}-${index+1}`)
    })
}
const menuBars=document.getElementById("menu-bars");
const overlay=document.getElementById('overlay');
overlay.style.opacity="0";
const navs=[];
for(let i=0;i<5;i++){
    navs.push(document.getElementById(`nav-${i+1}`))
    navs[i].addEventListener('click',toggleNav);
};
menuBars.addEventListener("click",toggleNav)



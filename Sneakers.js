
var nav = gsap.timeline();
var page1 = gsap.timeline({ 
    repeat: -1,
    // yoyo: true,
});
nav
.from("#logo,#navPart2,#navpart3 ",{
    y:-100,
    opacity:0,
    duration:1,
    stagger:1,
})

page1
.from("#page1 div",{
    x:-1500,
    opacity:0,
    stagger:5,
    duration:1,
    delay:1,
})
.to("#page1 div",{
    x:3000,
    opacity:0,
    stagger:5,
})
gsap.from("#PumaSlipStream",{
    opacity:0,
})


var sidebar = document.getElementById("sidebar") 
var hambuger = document.getElementById('hambuger')
function sidebarShow(){
    // console.log("hello")
    sidebar.classList.toggle("active");
}



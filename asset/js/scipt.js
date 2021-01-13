
// LINK NAVIAGASI SCROLL SMOTH
const scroll = new SmoothScroll('.main-nav a[href*="#"]',{
    speed: 500
});


// MENU TOGGLE

const menu = document.querySelector('.menu');
const mainNav = document.querySelector('.main-nav');
const listMenu = document.querySelector('.list-menu');

menu.addEventListener('click', () => {
    mainNav.classList.toggle('menu-toggle')
})

listMenu.addEventListener('click', () => {
    mainNav.classList.toggle('menu-toggle')
})


// GSAP ANIMATION 

// gsap register puluggin

gsap.from('.main-nav',{y: 20, duration:1, opacity: 0} );
gsap.from('.hero',{y: -20, duration:1.5, opacity: 0, delay: 1} );
gsap.from('.social-media',{x: -40, duration:1, opacity: 0} );
gsap.from('.hero-desc h1:nth-child(1)',{
    opacity: 0,
    y:20,
    delay: 1.5
})

gsap.from('.hero-desc h1:nth-child(2)',{
    opacity: 0,
    y:20,
    delay: 2
});

// 3D MOUSE MOVE ANIMATION HERO

// target trigger elemant
const hero = document.querySelector('.hero-img');
// popup items
const imgIcon = document.querySelectorAll('.img-icon');

// monving animation event
hero.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) /30;
    let yAxis = (window.innerWidth / 2 - e.pageY) /30;
    hero.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // console.log(xAxis, yAxis);
}) 


// maouse in animation
hero.addEventListener('mouseenter', (e)=>{
    hero.style.transition = 'none';

    // popup elements
    imgIcon[0].style.transform = 'translateZ(120px)';
    imgIcon[1].style.transform = 'translateZ(150px)';
    imgIcon[2].style.transform = 'translateZ(80px)';
    imgIcon[3].style.transform = 'translateZ(100px)';

});

// mouse out animation 
hero.addEventListener('mouseleave', (e) =>{
    hero.style.transition = 'all 0.75s ease';
    hero.style.transform = `rotateY(0deg) rotateX(0deg)`;

    // popback
    imgIcon[0].style.transform = 'translateZ(0)';
    imgIcon[1].style.transform = 'translateZ(0)';
    imgIcon[2].style.transform = 'translateZ(0)';
    imgIcon[3].style.transform = 'translateZ(0)';
});


// about animation

gsap.from('.about-wraper',{

    scrollTrigger:{
        // markers: true,
        trigger: '.about-wraper',
        start: 'top center',
        end: 'center 90%',
        scrub:1
    },
    y:100,
    opacity:0,
    duration:1

});

gsap.from('.about-img',{
    scrollTrigger:{
        // markers:true,
        trigger: '.about-img',
        start: 'top 80%',
        end: 'center 90%',
        scrub:1

    },
    x:100,
    duration:1,
    opacity:0
})

gsap.from('.about-desc',{
    scrollTrigger:{
        // markers:true,
        trigger: '.about-desc',
        start: 'top 80%',
        end: 'center 90%',
        scrub:1

    },
    x:-100,
    duration:1,
    opacity:0
})


// 3D ANIMATION IMG PROFIL

// targeting elements
const aboutImage = document.querySelector('.about-img');
const cardAbout = document.querySelector('.about-card');
// popup elements
const circle = document.querySelector('.circle');
const square = document.querySelector('.square');
const dots = document.querySelector('.dots');
const imgProfile = document.querySelector('.profile');  

aboutImage.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) /100;
    let yAxis = (window.innerWidth / 2 - e.pageY) /100;
    cardAbout.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

aboutImage.addEventListener('mouseenter', (e)=>{
    cardAbout.style.transition = 'none';

    // popout
    circle.style.transform = 'translateZ(10px)';
    imgProfile.style.transform = 'translateZ(50px)';
    square.style.transform = 'translateZ(110px) rotateZ(45deg)';
    dots.style.transform = 'translateZ(120px)';



})

aboutImage.addEventListener('mouseleave', (e) =>{
    cardAbout.style.transition = 'all 0.75s ease';
    cardAbout.style.transform = `rotateY(0deg) rotateX(0deg)`;
    
    // popback
    circle.style.transform = 'translateZ(0px)';
    imgProfile.style.transform = 'translateZ(0)';
    square.style.transform = 'translateZ(0) rotateZ(45)';
    dots.style.transform = 'translateZ(0)';
});



// PORTFOILIO ANIMATION

gsap.from('#portfolio .rubrik', {
    scrollTrigger:{
        // markers: true,
        trigger: '#portfolio .rubrik',
        start: 'top 95%',
        end: 'center 90%',
        scrub:1
    },
    x:-200,
    duration:1,
    opacity:0
})

gsap.from('#portfolio .rubrik-line', {
    scrollTrigger:{
        // markers: true,
        trigger: '#portfolio .rubrik-line',
        start: 'top center',
        end: 'center center',
        scrub:1
    },
    x:-200,
    duration:1,
    opacity:0,
    delay:1
})

function fadeup(element){
    gsap.from(element, {
        scrollTrigger:{
            // markers: true,
            trigger: element,
            start: 'top center',
            end: 'center center',
            scrub:1
        },
        y:100,
        duration:1,
        opacity:0,
    })
}


// fadeup('.portfolio')
// fadeup('.portfolio:nth-cild(1)')
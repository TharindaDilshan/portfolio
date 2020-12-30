const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// const fsAnimation = document.querySelectorAll('.fullScreenAnimation');

function addFsAnimation(){
    fsAnimation1 = ['🎈', '⭐', '⭐', '⭐', '⭐', '⭐', '⭐', '⭐', '⭐', '🎃', '⭐', '❄'];
    fsAnimation2 = ['🎉', '⭐', '⭐', '⭐', '⭐', '⭐', '⭐', '⭐', '⭐', '🧛', '⭐', '🎅'];
    fsAnimation3 = ['🎊', '⭐', '⭐', '⭐', '⭐', '⭐', '⭐', '⭐', '⭐', '👻', '⭐', '🎄'];

    month = new Date().getMonth();

    document.getElementById('animation_type_0').innerHTML = fsAnimation1[month];
    document.getElementById('animation_type_1').innerHTML = fsAnimation1[month];
    document.getElementById('animation_type_2').innerHTML = fsAnimation2[month];
    document.getElementById('animation_type_3').innerHTML = fsAnimation3[month];
    document.getElementById('animation_type_4').innerHTML = fsAnimation1[month];
    document.getElementById('animation_type_5').innerHTML = fsAnimation2[month];
    document.getElementById('animation_type_6').innerHTML = fsAnimation3[month];
    document.getElementById('animation_type_7').innerHTML = fsAnimation1[month];
    document.getElementById('animation_type_8').innerHTML = fsAnimation2[month];
    document.getElementById('animation_type_9').innerHTML = fsAnimation3[month];
}

addFsAnimation();

/* ACTIVE AND REMOVE MENU */
const navLink = document.querySelectorAll('.nav_link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home_title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home_img',{delay: 400}); 
sr.reveal('.home_social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about_img',{}); 
sr.reveal('.about_subtitle',{delay: 400}); 
sr.reveal('.about_text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle',{}); 
sr.reveal('.skills_text',{}); 
sr.reveal('.skills_data',{interval: 200, origin: 'left'}); 
sr.reveal('.skills_img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work_img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact_subtitle',{interval: 200}); 
sr.reveal('.link_github', {interval: 200, origin: 'left'})
sr.reveal('.link_linkedin', {interval: 200, origin: 'top'})
sr.reveal('.link_devto', {interval: 200, origin: 'right'})
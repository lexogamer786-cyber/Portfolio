


gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero h1",{
  y:50,
  opacity:0,
  duration:1.3
})

gsap.to(".hero h1", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 2
});

gsap.from(".hero p",{
  y:30,
  opacity:0,
  delay:0.5
})

gsap.from(".btn",{
  scale:0.5,
  duration:0.6,
})

// FLOATING SHAPES
gsap.to(".shape1",{
  y:50,
  repeat:-1,
  yoyo:true,
  duration:3
})

gsap.to(".shape2",{
  y:-50,
  repeat:-1,
  yoyo:true,
  duration:3
})

gsap.to(".hero p", {
  y: -8,
  repeat: -1,
  yoyo: true,
  duration: 2
});

// ABOUT ANIMATION
gsap.from(".about h2, .about p",{
  y:50,
  opacity:0,
  duration:8,
  scrollTrigger:{
    trigger:".about",
    start:"top 80%"
  }
})

gsap.to(".about h2", {
  y: -8,
  repeat: -1,
  yoyo: true,
  duration: 2
});

// SKILLS ANIMATION
gsap.from(".card",{
  y:50,
  opacity:0,
  duration:0.8,
  stagger:0.2,
  scrollTrigger:{
    trigger:".skills",
    start:"top 80%"
  }
})

gsap.to(".skills h2", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 2
});

// PROJECTS ANIMATION
 gsap.utils.toArray(".project").forEach((project) => {
  gsap.from(project, {
    y: 80,
    opacity: 0,
    duration: 1.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: project,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});

gsap.to(".projects h2", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 2
});

gsap.to(".github h2", {
  y: 10,
  repeat: -1,
  yoyo: true,
  duration: 2
});

gsap.to(".github img", {
  y: -15,
  repeat: -1,
  yoyo: true,
  duration: 3
});

gsap.to(".github-content  h3", {
  y: -8,
  repeat: -1,
  yoyo: true,
  duration: 2
});


gsap.to(".github-content  p", {
  y: -15,
  repeat: -1,
  yoyo: true,
  duration: 3
});

gsap.to(".github-content  a", {
  y: -12,
  repeat: -1,
  yoyo: true,
  duration: 0.5
});

gsap.from(".github", {
  y: 100,
  opacity: 0,
  duration: 1.7,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".github",
    start: "top 85%",
    toggleActions: "play none none none"
  }
});

gsap.from(".github img, .github-content", {
  y: 60,
  opacity: 0,
  duration: 5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".github",
    start: "top 85%"
  }
});

gsap.to(".contact  h2", {
  y: -2,
  repeat: -1,
  yoyo: true,
  duration: 1
});

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  document.querySelector(".progress-bar").style.width = scrollPercent + "%";
});

gsap.to("nav", {
  padding: "10px 40px",
  backgroundColor: "rgba(255,255,255,0.95)",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  scrollTrigger: {
    trigger: "body",
    start: "top -50",
    toggleActions: "play none reverse reverse"
  }
});



gsap.from(".contact h2, .contact-box",{
  y:80,
  duration:1,
  stagger:0.2,
  ease:"power2.out",
  scrollTrigger:{
    trigger:".contact",
    start:"top 80%"
  }
});


/* ================= CUSTOM CURSOR ================= */

const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  blur.style.left = e.clientX + "px";
  blur.style.top = e.clientY + "px";

});

/* Hover Effect */

const hoverItems = document.querySelectorAll(
"a, button, .btn, .card, .project img"
);

hoverItems.forEach((item)=>{

  item.addEventListener("mouseenter",()=>{

    cursor.classList.add("active");

  });

  item.addEventListener("mouseleave",()=>{

    cursor.classList.remove("active");

  });

});


/* ================= MOUSE PARALLAX ================= */

document.addEventListener("mousemove",(e)=>{

  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  gsap.to(".shape1",{
    x: x * 60,
    y: y * 60,
    duration:1
  });

  gsap.to(".shape2",{
    x: x * -80,
    y: y * -80,
    duration:1
  });

  gsap.to(".shape3",{
    x: x * 100,
    y: y * 100,
    duration:1.5
  });

  gsap.to(".shape4",{
    x: x * -120,
    y: y * -120,
    duration:1.5
  });

});

/* ================= SKILL BAR ANIMATION ================= */

gsap.from(".progress-fill",{

  width:0,
  duration:2,
  stagger:0.3,

  scrollTrigger:{
    trigger:".skills-progress",
    start:"top 80%"
  }

});


/* ================= DARK MODE ================= */

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click",()=>{

  document.body.classList.toggle("dark");

  /* ICON CHANGE */
  if(document.body.classList.contains("dark")){

    themeBtn.innerHTML = "☀️";

  }else{

    themeBtn.innerHTML = "🌙";

  }

});


/* ===LOADER === */


/* LOADER  */

window.addEventListener("load",()=>{

  const loader = document.querySelector(".loader");

  setTimeout(()=>{

    loader.classList.add("hide");

  },2500);

});


/* ==== 3D TILT ====== */

const tiltElements = document.querySelectorAll(
".card, .project-content, .btn"
);

tiltElements.forEach((element)=>{

  element.addEventListener("mousemove",(e)=>{

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 12);

    const rotateY = ((centerX - x) / 12);

    element.style.transform =
    `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.05)
    `;

  });

  element.addEventListener("mouseleave",()=>{

    element.style.transform =
    `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
    `;

  });

});


/* MAGNETIC BUTTONS ==== */

const magneticButtons = document.querySelectorAll(
".btn, .github-content a, .project-content a"
);

magneticButtons.forEach((button)=>{

  button.addEventListener("mousemove",(e)=>{

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / 4;

    const moveY = (y - rect.height / 2) / 4;

    button.style.transform =
    `translate(${moveX}px, ${moveY}px) scale(1.08)`;

  });

  button.addEventListener("mouseleave",()=>{

    button.style.transform =
    "translate(0px,0px) scale(1)";

  });

});



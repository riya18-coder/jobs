 



/* SCROLL ANIMATION */

const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveal.forEach(el=>{

let top = el.getBoundingClientRect().top;
let height = window.innerHeight;

if(top < height - 100){

el.classList.add("active");

}

});

});

/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("active");
}

});
const cards=document.querySelectorAll('.job-card');

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
},{threshold:0.2});

cards.forEach(card=>{
observer.observe(card);
});


},{threshold:0.3});

reveals.forEach(el=>{
observer.observe(el);
});

 
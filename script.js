const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
    
    let tl = gsap.timeline();


    tl.from('.left h1',{
        opacity:0,
        y:100,
       delay:0.1,

    })
    tl.from('#sourav',{
        opacity:0,
        x:100,
        

    })
 
    tl.from('.left p',{
        opacity:0,
        x:-10,
        

    },"same")

    let facebook=document.querySelector(`#facebook`)
    let insta=document.querySelector(`#insta`)
    let linkedin=document.querySelector(`#linkedin`)
    let twitter=document.querySelector(`#twitter`)
    let para=document.querySelector(`#para`)
      para.addEventListener(`mouseenter`,()=>{
       
        gsap.to(para,{
            scale:1.1,
            duration:0.1,
            cursor:"pointer",
            ease:"linear"

        })
})
 
      para.addEventListener(`mouseleave`,()=>{
        
        gsap.to(para,{
            scale:1,
            duration:0.1,
            scrub:3,
            

        })

})
gsap.from(".project-highlights, .skills, .learning", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
});

 



 
 window.addEventListener('scroll', function() { 
    let navbar = document.querySelector('.div-list');
    let links = navbar.querySelectorAll('a');
    let sections = document.querySelectorAll('section');
    let currentLink = null; 
   
 
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let section = sections[i] ;
        
      if (section.offsetTop <= window.scrollY ) {
        currentLink == link ; 
       
      }
      if(currentLink){
         let line = navbar.querySelector('.line');
         line.style.transform = `translateX(${i * 111}px)`;
      }
    }});

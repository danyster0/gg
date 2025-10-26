/* script.js
   Handles:
   - navbar scroll class
   - simple mobile toggle
   - contact form validation + fake send
   - small tilt effect for preview card
*/

document.addEventListener('DOMContentLoaded', ()=>{

  // NAVBAR scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', ()=> {
    if(window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // Simple mobile hamburger (if exists)
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      navLinks.classList.toggle('open');
    });
  }

  // Hero preview tilt
  const preview = document.querySelector('.card-preview');
  if(preview){
    preview.addEventListener('mousemove', (e)=>{
      const r = preview.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      preview.style.transform = `rotateX(${ -y * 6 }deg) rotateY(${ x * 8 }deg) translateY(-6px)`;
    });
    preview.addEventListener('mouseleave', ()=>{
      preview.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
    });
  }

  // Contact form small logic
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.querySelector('[name=name]').value.trim();
      const email = form.querySelector('[name=email]').value.trim();
      const msg = form.querySelector('[name=message]').value.trim();
      if(!name || !email || !msg){
        showToast('Please fill all fields');
        return;
      }
      // fake send
      showToast('Message sent! We will contact you soon ✅', true);
      form.reset();
    });
  }

  // Simple toast
  function showToast(text, success=false){
    let t = document.createElement('div');
    t.className = 'toast';
    t.innerText = text;
    t.style.position='fixed';
    t.style.right='20px';
    t.style.bottom='24px';
    t.style.background = success ? 'linear-gradient(90deg,#26cc6b,#1fb86a)' : 'linear-gradient(90deg,#ff1f2d,#e01222)';
    t.style.color='#fff';t.style.padding='12px 16px';t.style.borderRadius='10px';
    t.style.boxShadow='0 10px 40px rgba(0,0,0,0.6)';
    t.style.zIndex=9999;document.body.appendChild(t);
    setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateY(12px)';}, 2000);
    setTimeout(()=>t.remove(), 2800);
  }

});

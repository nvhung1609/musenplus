// Sticky header
window.addEventListener("scroll", ()=>{
  const h=document.getElementById("mainHeader");
  if(window.scrollY>30) h.classList.add("scrolled"); else h.classList.remove("scrolled");
});

// Dropdown thông báo
function toggleNotifications(ev){
  ev.preventDefault();
  const dd=document.getElementById("notificationsDropdown");
  dd.classList.toggle("show");
  document.addEventListener("click",e=>{
    if(!dd.contains(e.target)&&!ev.target.contains(e.target)) dd.classList.remove("show");
  },{once:true});
}

// Ngôn ngữ đơn giản
document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.querySelector(".lang-btn");
  const dd=document.querySelector(".lang-dd");
  if(btn&&dd){
    btn.addEventListener("click",e=>{
      e.preventDefault();
      dd.classList.toggle("show");
      document.addEventListener("click",ev=>{
        if(!dd.contains(ev.target)&&!btn.contains(ev.target)) dd.classList.remove("show");
      },{once:true});
    });
  }

  dd?.querySelectorAll("button").forEach(b=>{
    b.addEventListener("click",()=>{
      localStorage.setItem("lang",b.dataset.lang);
      btn.querySelector("span").textContent=b.textContent.trim();
      dd.classList.remove("show");
    });
  });

  const saved=localStorage.getItem("lang");
  if(saved==="en") btn.querySelector("span").textContent="EN US";
});

// Fade-up
const io=new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){en.target.classList.add("appear");io.unobserve(en.target);}
  });
},{threshold:.12});
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".fade-up").forEach(el=>io.observe(el));
});

// Form tư vấn
function submitLead(e){
  e.preventDefault();
  const email=e.target.querySelector('input[type="email"]')?.value?.trim();
  alert(email?`Đã nhận yêu cầu từ: ${email}`:"Đã nhận yêu cầu. Cảm ơn!");
  e.target.reset();
  return false;
}

// Năm bản quyền
document.addEventListener("DOMContentLoaded",()=>{
  const y=document.getElementById("y");
  if(y) y.textContent=new Date().getFullYear();
});

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// Chatbot logic
function toggleChat() {
  const chatbox = document.getElementById("chatbot");
  // Toggle visibility
  if (chatbox.style.display === "none") {
    chatbox.style.display = "block";
  } else {
    chatbox.style.display = "none";
  }
}
function sendMessage() {
  const input = document.getElementById("chat-input");
  const chatWindow = document.getElementById("chat-window");
  const userMsg = input.value;

  if (!userMsg) return;

  // Show user message bubble
  chatWindow.innerHTML += `<div class="user-msg">${userMsg}</div><br>`;

  // Simple AI reply
  let reply = "Hello! I’m Op, your design assistant.";
  if (userMsg.toLowerCase().includes("logo")) {
    reply = "Op: We create modern, creative logos tailored to your brand.";
  }
  if (userMsg.toLowerCase().includes("website")) {
    reply = "Op: We design interactive websites with motion and style!";
  }

  // Show bot message bubble
  chatWindow.innerHTML += `<div class="bot-msg">${reply}</div><br>`;
  input.value = "";
}
function showProjects(type) {
  // Hide all galleries
  document.getElementById("recent").style.display = "none";
  document.getElementById("big").style.display = "none";
  document.getElementById("past").style.display = "none";

  // Show selected gallery
  document.getElementById(type).style.display = "flex";
}







 



document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const menu = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');
  const theme = document.querySelector('#theme-toggle');
  if (menu && nav) menu.addEventListener('click', () => nav.classList.toggle('open'));
  if (theme) {
    const saved = localStorage.getItem('lavington-theme');
    if (saved === 'dark') body.classList.add('dark-mode');
    theme.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    theme.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const dark = body.classList.contains('dark-mode');
      theme.textContent = dark ? '☀️' : '🌙';
      localStorage.setItem('lavington-theme', dark ? 'dark' : 'light');
    });
  }
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); }
    }), {threshold:.12});
    reveals.forEach(el => observer.observe(el));
  } else reveals.forEach(el => el.classList.add('visible'));

  document.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = filter === 'all' || card.dataset.group === filter ? '' : 'none';
    });
  }));
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox img');
  const closeLightbox = () => { if(lightbox) lightbox.classList.remove('open'); };
  document.querySelectorAll('[data-lightbox]').forEach(card => card.addEventListener('click', () => {
    if(!lightbox || !lightboxImage) return;
    lightboxImage.src = card.dataset.lightbox;
    lightboxImage.alt = card.dataset.alt || 'Project image';
    lightbox.classList.add('open');
  }));
  document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });
});

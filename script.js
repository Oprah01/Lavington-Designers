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







 




  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");
  const sendBtn = document.querySelector("button");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
  sendBtn.addEventListener("click", sendMessage);

  function sendMessage() {
    const message = input.value.trim();
    if (message === "") return;
    chat.innerHTML += `
      <div class="msg user">
        <div class="bubble">You: ${message}</div>
      </div>`;

    const reply = getBotReply(message.toLowerCase());


    setTimeout(() => {
      chat.innerHTML += `
        <div class="msg bot">
          <div class="bubble">Bot: ${reply}</div>
        </div>`;
      chat.scrollTop = chat.scrollHeight;
    }, 600);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
  }

  function getBotReply(message) {
    if (message === "hi" || message === "hello") return "Hello there! 👋";
    if (message === "how are you") return "I'm doing great! What about you?";
    if (message === "bye") return "Goodbye! 👋 See you soon.";
    if (message === "your name") return "I'm ChatBot, your virtual buddy 🤖";
    return "Sorry, I didn't understand that 😅";
  }

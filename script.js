function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (userInput.trim() === "") return;

    let userMessage = document.createElement("p");
    userMessage.innerText = "You: " + userInput;
    chatbox.appendChild(userMessage);

    let botMessage = document.createElement("p");
    botMessage.innerText = "Bot: I’m here to assist!";
    chatbox.appendChild(botMessage);

    document.getElementById("userInput").value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}

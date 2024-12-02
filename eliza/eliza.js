const chatHistory = document.getElementById("chat-history");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

const elizaResponses = {
    hello: "Hi there! How can I help you today?",
    problem: "Can you tell me more about your problem?",
    "i feel": "Why do you feel that way?",
    default: "I'm not sure I understand. Can you elaborate?",
};

function getResponse(input) {
    const normalizedInput = input.toLowerCase();
    for (const key in elizaResponses) {
        if (normalizedInput.includes(key)) {
            return elizaResponses[key];
        }
    }
    return elizaResponses.default;
}

function appendMessage(sender, message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = `${sender}: ${message}`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    appendMessage("You", userMessage);
    const response = getResponse(userMessage);
    setTimeout(() => appendMessage("ELIZA", response), 500);

    userInput.value = "";
});

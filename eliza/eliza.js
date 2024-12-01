// Get references to HTML elements
const chatHistory = document.getElementById("chat-history");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

// Array of responses with keywords
const elizaResponses = [
    { keyword: "hi", response: "Hi there! How can I help you today?" },
    { keyword: "hello", response: "Hi there! How can I help you today?" },
    { keyword: "problem", response: "Can you tell me more about your problem?" },
    { keyword: "i feel", response: "Why do you feel that way?" },
    { keyword: "sorry", response: "There's no need to apologize." },
    { keyword: "thank", response: "You're welcome! How else can I assist you?" },
    { keyword: "mother", response: "Tell me more about your mother." },
    { keyword: "father", response: "Tell me more about your father." },
    { keyword: "default", response: "I'm not sure I understand. Can you elaborate?" },
];

// Function to find an appropriate response based on user input
function getResponse(input) {
    const normalizedInput = input.toLowerCase(); // Convert input to lowercase for easier matching

    // Check each keyword in the response array
    for (const item of elizaResponses) {
        if (normalizedInput.includes(item.keyword)) {
            return item.response; // Return the matching response
        }
    }

    // Default response if no keywords match
    return "I'm not sure I understand. Can you elaborate?";
}

// Function to add a message to the chat history
function appendMessage(sender, message) {
    const messageElement = document.createElement("p");
    messageElement.classList.add(sender === "You" ? "user-message" : "eliza-message");
    messageElement.textContent = message;
    chatHistory.appendChild(messageElement);

    // Auto-scroll to the latest message
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Event listener for form submission
chatForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    const userMessage = userInput.value.trim(); // Get user input
    if (!userMessage) return; // Ignore empty inputs

    appendMessage("You", userMessage); // Add user's message to the chat

    // Get ELIZA's response and add it to the chat
    const response = getResponse(userMessage);
    setTimeout(() => appendMessage("ELIZA", response), 500);

    userInput.value = ""; // Clear the input box
});

// Get references to HTML elements
const chatHistory = document.getElementById("chat-history");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

// Custom responses based on patterns
const responses = {
    "hello|hi|hey": [
        "Hello! How are you feeling today?",
        "Hi there! What’s on your mind?",
        "Hey! How can I help you?",
    ],
    "you remind me of (.*)": [
        "Why do you think I remind you of {0}?",
        "What makes you think of {0} when talking to me?",
        "Is it a good feeling to be reminded of {0}?",
    ],
    "(.*) mother|father|family|parent(.*)": [
        "Tell me more about your family.",
        "How does that make you feel about your family?",
        "What role does your family play in your thoughts?",
    ],
    "(.*) I need (.*)": [
        "Why do you need {1}?",
        "Would getting {1} really help you?",
        "What if you didn’t need {1}?",
    ],
    "(.*) I am (.*)": [
        "Why do you think you are {1}?",
        "How long have you felt that way?",
        "What made you feel like {1}?",
    ],
    "(.*) I feel (.*)": [
        "Why do you feel {1}?",
        "Does feeling {1} happen often?",
        "How does that feeling affect you?",
    ],
    "(.*) (sorry|apologize)(.*)": [
        "No need to apologize.",
        "Apologies aren't necessary. Why do you feel that way?",
        "It’s okay to feel that way.",
    ],
    "bye|goodbye|exit": [
        "Goodbye! Take care.",
        "Thank you for sharing. Goodbye!",
        "Bye! I’m here if you need to talk again.",
    ],
    "(.*)": [
        "Can you tell me more?",
        "Why do you say that?",
        "How does that make you feel?",
        "What do you mean by that?",
        "Interesting... go on.",
    ],
};

// Reflections dictionary to reframe user input
const reflections = {
    I: "you",
    me: "you",
    my: "your",
    am: "are",
    you: "I",
    your: "my",
    yours: "mine",
    are: "am",
};

// Function to reflect user input dynamically
function reflectInput(input) {
    const words = input.split(" ");
    const reflectedWords = words.map((word) => reflections[word.toLowerCase()] || word);
    return reflectedWords.join(" ");
}

// Function to find a suitable response
function getResponse(input) {
    const normalizedInput = input.toLowerCase();

    // Loop through the responses to find a matching pattern
    for (const pattern in responses) {
        const regex = new RegExp(pattern, "i");
        const match = normalizedInput.match(regex);

        if (match) {
            const possibleResponses = responses[pattern];
            const response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];

            // Replace placeholders in the response with matched groups
            const reflectedInput = match.slice(1).map((group) => reflectInput(group || ""));
            return response.replace(/\{(\d+)\}/g, (_, index) => reflectedInput[index] || "");
        }
    }

    // Default fallback response
    return "Can you elaborate on that?";
}

// Function to append a message to the chat history
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

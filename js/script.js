const facts = [
    "The Earth is roughly 4.54 billion years old.",
    "The adult human body contains about 60% water.",
    "Honey never spoils.",
    "A leap year isn't always 366 days.",
    // Add as many facts as you like
];

function generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("random-fact").textContent = facts[randomIndex];
}

// Generate a random fact immediately when the page loads
generateRandomFact();

// Generate a new random fact every 1 minute (60000 milliseconds)
setInterval(generateRandomFact, 60000);

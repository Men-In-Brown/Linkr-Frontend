// Sample JSON data with ideas
const ideas = [
    { name: "Idea 1", description: "Description for Idea 1" },
    { name: "Idea 2", description: "Description for Idea 2" },
    { name: "Idea 3", description: "Description for Idea 3" },
    { name: "Idea 4", description: "Description for Idea 3" },
    { name: "Idea 5", description: "Description for Idea 3" },
    { name: "Idea 6", description: "Description for Idea 3" },
    { name: "Idea 7", description: "Description for Idea 3" },
    { name: "Idea 8", description: "Description for Idea 3" },
    { name: "Idea 9", description: "Description for Idea 3" },
    { name: "Idea 10", description: "Description for Idea 3" },
    { name: "Idea 11", description: "Description for Idea 3" }
    // Add more ideas as needed
];

let currentIdeaIndex = -1;

function getRandomIdea() {
    return ideas[Math.floor(Math.random() * ideas.length)];
}

function displayIdea(idea) {
    document.getElementById("ideaName").innerText = idea.name;
    document.getElementById("ideaDescription").innerText = idea.description;
}

function swipeCard() {
    const idea = getRandomIdea();
    displayIdea(idea);
}

function invest() {
    const currentIdea = ideas[currentIdeaIndex];
    if (currentIdea) {
        console.log(`Invested ${currentIdea.name}!`);
    } else {
        console.log("No idea to invest.");
    }
    window.location.href = "invest";
}

function join() {
    const currentIdea = ideas[currentIdeaIndex];
    if (currentIdea) {
        console.log(`Joined ${currentIdea.name}!`);
    } else {
        console.log("No idea to join.");
    }
    window.location.href = "join";
}

// Event listeners for arrow key presses
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        swipeCard();
    } else if (event.key === "ArrowLeft") {
        invest();
    } else if (event.key === "ArrowRight") {
        join();
    }
});

let touchStartX = 0;
let touchEndX = 0;

// Function to handle touch start
function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

// Function to handle touch end
function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
}

// Function to determine swipe direction and call corresponding function
function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {
        // Swipe right
        join();
    } else if (swipeDistance < -50) {
        // Swipe left
        invest();
    } else {
        // Swipe up
        swipeCard();
    }
}

// Event listeners for touch gestures
document.getElementById("ideaCard").addEventListener("touchstart", handleTouchStart);
document.getElementById("ideaCard").addEventListener("touchend", handleTouchEnd);

// Initial swipe to show the first idea
swipeCard();

const ideaCard = document.getElementById("ideaCard");

// Function to handle touch start
function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

// Function to handle touch end
function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
handleSwipe();
}

// Function to determine swipe direction and call corresponding function
function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

if (swipeDistance > 50) {
    // Swipe right
    join();
} else if (swipeDistance < -50) {
    // Swipe left
    invest();
} else {
    // Swipe up
    swipeCard();
}
}

// Event listeners for touch gestures on the idea card
ideaCard.addEventListener("touchstart", handleTouchStart);
ideaCard.addEventListener("touchend", handleTouchEnd);

const leftSwipeArea = document.createElement("div");
leftSwipeArea.classList.add("invisible-swipe-area", "left-swipe-area");
leftSwipeArea.addEventListener("click", invest);

const rightSwipeArea = document.createElement("div");
rightSwipeArea.classList.add("invisible-swipe-area", "right-swipe-area");
rightSwipeArea.style.left = "auto"; // Reset left property to default
rightSwipeArea.style.right = "0";   // Set the right property to 0
rightSwipeArea.addEventListener("click", join);

const topSwipeArea = document.createElement("div");
topSwipeArea.classList.add("invisible-swipe-area", "top-swipe-area");
topSwipeArea.addEventListener("click", swipeCard);

// Append invisible div elements to the body
document.body.appendChild(leftSwipeArea);
document.body.appendChild(rightSwipeArea);
document.body.appendChild(topSwipeArea);

// Initial swipe to show the first idea
swipeCard();
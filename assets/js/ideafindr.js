window.onload = function() {
    const apiUrl = "https://linkr.stu.nighthawkcodingsociety.com/api/ideas";
  
    // Assuming the API returns a JSON array with the provided ideas data
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const ideas = data;
        console.log("Ideas:", ideas);
        // Now you can use the 'ideas' constant in your code
      })
      .catch(error => {
        console.error("Fetch error:", error);
      });
};

// Delete and Ctrl+H "exampleIdeas" with "ideas" when the API is up.
const exampleIdeas = [
    { name: "Idea 1", description: "Description for Idea 1" },
    { name: "Idea 2", description: "Description for Idea 2" },
    { name: "Idea 3", description: "Description for Idea 3" },
    { name: "Idea 4", description: "Description for Idea 4" },
    { name: "Idea 5", description: "Description for Idea 5" },
    { name: "Idea 6", description: "Description for Idea 6" },
    { name: "Idea 7", description: "Description for Idea 7" },
    { name: "Idea 8", description: "Description for Idea 8" },
    { name: "Idea 9", description: "Description for Idea 9" },
    { name: "Idea 10", description: "Description for Idea 10" },
    { name: "Idea 11", description: "Description for Idea 11" }
];

let currentIdeaIndex = -1;

let _ideaName, _ideaDescription;

function getRandomIdea() {
    var idea = exampleIdeas[Math.floor(Math.random() * exampleIdeas.length)];
    _ideaName = idea.name;
    _ideaDescription = idea.description;
    return idea;
}

function displayIdea(idea) {
    document.getElementById("ideaName").innerText = idea.name;
    document.getElementById("ideaDescription").innerText = idea.description;
}

function storeIdeasLocal(ideaName, ideaDescription) {
    console.log("Idea Name:" + ideaName);
    console.log("Idea Description: " + ideaDescription);
    localStorage.setItem('_ideaName', ideaName);
    localStorage.setItem('_ideaDescription', ideaDescription);
}

function swipeCard() {
    const idea = getRandomIdea();
    displayIdea(idea);
}

function invest() {
    storeIdeasLocal(_ideaName, _ideaDescription);
    window.location.href = "invest";
}

function join() {
    storeIdeasLocal(_ideaName, _ideaDescription);
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
let companies;
let currentcompanyIndex = -1;
let _companyName, _companyDescription;
/*
const exampleCompanies = [
    { name: "company 1", description: "Description for company 1" },
    { name: "company 2", description: "Description for company 2" },
    { name: "company 3", description: "Description for company 3" },
    { name: "company 4", description: "Description for company 4" },
    { name: "company 5", description: "Description for company 5" },
    { name: "company 6", description: "Description for company 6" },
    { name: "company 7", description: "Description for company 7" },
    { name: "company 8", description: "Description for company 8" },
    { name: "company 9", description: "Description for company 9" },
    { name: "company 10", description: "Description for company 10" },
    { name: "company 11", description: "Description for company 11" }
];
*/

window.onload = function() {
    const apiUrl = "http://localhost:8085/api/companies";

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        companies = data;
        console.log("companies:", companies);

        // Now that you have the data, you can call functions dependent on 'companies'
        swipeCard();  // or any other function you want to call after getting the data
      })
      .catch(error => {
        console.error("Fetch error:", error);
      });
};

function getRandomCompany() {
    if (companies && companies.length > 0) {
        const randomIndex = Math.floor(Math.random() * companies.length);
        const randomCompany = companies[randomIndex];
        const { name, description } = randomCompany;

        _companyName = name;
        _companyDescription = description;

        return { name, description };
    } else {
        console.log("Companies data is not available yet.");
        return { name: "No company", description: "No description" };
    }
}

function displayCompany(company) {
    document.getElementById("companyName").innerText = company.name;
    document.getElementById("companyDescription").innerText = company.description;
}

function storecompaniesLocal(companyName, companyDescription) {
    console.log("Company Name:" + companyName);
    console.log("Company Description: " + companyDescription);
    localStorage.setItem('_companyName', companyName);
    localStorage.setItem('_companyDescription', companyDescription);
}

function swipeCard() {
    if (companies && companies.length > 0) {
        const company = getRandomCompany();
        displayCompany(company);
    } else {
        console.log("Companies data is not available yet.");
    }
}

function invest() {
    storecompaniesLocal(_companyName, _companyDescription);
    window.location.href = "invest";
}

function join() {
    storecompaniesLocal(_companyName, _companyDescription);
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
document.getElementById("companyCard").addEventListener("touchstart", handleTouchStart);
document.getElementById("companyCard").addEventListener("touchend", handleTouchEnd);

// Initial swipe to show the first company
swipeCard();

const companyCard = document.getElementById("companyCard");

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

// Event listeners for touch gestures on the company card
companyCard.addEventListener("touchstart", handleTouchStart);
companyCard.addEventListener("touchend", handleTouchEnd);

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

// Initial swipe to show the first company
swipeCard();
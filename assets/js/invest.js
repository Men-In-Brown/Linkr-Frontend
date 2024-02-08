let _ideaName, _ideaDescription;

window.onload = function() {
    _ideaName = localStorage.getItem("_ideaName");
    _ideaDescription = localStorage.getItem("_ideaDescription");
    document.getElementById("ideaName").innerHTML = "Idea: " + _ideaName;
    document.getElementById("ideaDescription").innerHTML = "Description: " + _ideaDescription;
    if (_ideaDescription === null || _ideaName === null) {
        console.log("ERROR: Idea name or description not found in localStorage");
    }
}

function submitForm() {
    // Fetch values from the form
    document.getElementById("ideaName").innerHTML = "Idea: " + _ideaName;
    document.getElementById("ideaDescription").innerHTML = "Description: " + _ideaDescription;
    console.log("_ideaName:", _ideaName);
    console.log("_ideaDescription:", _ideaDescription);

    // Validate the checkbox
    var understandCheckbox = document.getElementById("understandCheckbox").checked;
    if (!understandCheckbox) {
        alert("Please acknowledge that this is not a real investment.");
        return;
    }

    // Additional logic or actions can be added here based on the form submission
    // For example, you might want to send the data to a server or perform other actions.
}
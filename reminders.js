// Sample plant data (you can replace this with your data)
const plantData = [
    {
        name: "Spider Plant",
    },
    {
        name: "Aloe Vera",
    },
    {
        name: "Fern",
    },
    // Add more plant data here
];

// Function to populate the plant select options
function populatePlantSelect() {
    const plantSelect = document.getElementById("plant-select");

    plantData.forEach((plant) => {
        const option = document.createElement("option");
        option.value = plant.name;
        option.text = plant.name;
        plantSelect.appendChild(option);
    });
}

// Function to handle setting a reminder
function setReminder() {
    const plantSelect = document.getElementById("plant-select");
    const reminderType = document.getElementById("reminder-type");
    const dueDate = document.getElementById("due-date").value;

    // Replace this with your reminder setting logic
    alert(`Reminder set for ${plantSelect.value} to ${reminderType.value} on ${dueDate}`);
}

// Populate plant select options when the page loads
window.onload = populatePlantSelect;

// Add a click event listener to the "Set Reminder" button
const setReminderButton = document.getElementById("set-reminder-btn");
setReminderButton.addEventListener("click", setReminder);

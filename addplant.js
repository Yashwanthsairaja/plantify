document.addEventListener("DOMContentLoaded", function () {
    const addPlantForm = document.getElementById("add-plant-form");
    const confirmationButton = document.getElementById("confirmation-button");

    addPlantForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const plantName = document.getElementById("plant-name").value;
        const wateringNeeds = document.getElementById("watering-needs").value;
        const sunlightNeeds = document.getElementById("sunlight-needs").value;
        const fertilizerNeeds = document.getElementById("fertilizer-needs").value;
        const placement = document.getElementById("placement").value;
        const plantHeight = document.getElementById("plant-height").value;

        // Add the plant data to your collection (in-memory array)
        // You can replace this with your data storage mechanism (e.g., a database)
        const newPlant = {
            name: plantName,
            watering: wateringNeeds,
            sunlight: sunlightNeeds,
            fertilizer: fertilizerNeeds,
            placement: placement,
            height: plantHeight,
        };

        // Assuming you have a data storage mechanism, you can add the new plant to the collection.
        // For now, we'll just simulate it by displaying a confirmation message.
        alert("Plant added successfully!"); // You can replace this with your confirmation page logic.

        // Clear the form after submission
        addPlantForm.reset();
    });

    confirmationButton.addEventListener("click", function () {
        // Redirect to the confirmation page
        window.location.href = "confirmation.html";
    });
});

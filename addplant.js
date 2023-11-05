document.addEventListener("DOMContentLoaded", function () {
    const addPlantForm = document.getElementById("add-plant-form");

    addPlantForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const plantName = document.getElementById("plant-name").value;
        const wateringNeeds = document.getElementById("watering-need").value;
        const sunlightNeeds = document.getElementById("sunlight-need").value;
        const fertilizerNeeds = document.getElementById("fertilizer-need").value;
        const placement = document.getElementById("placement").value;
        const plantHeight = document.getElementById("height").value;

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

        // Redirect to the confirmation page
        window.location.href = "confirmation.html";
    });
});


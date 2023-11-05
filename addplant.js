document.addEventListener("DOMContentLoaded", function () {
    const addPlantForm = document.getElementById("add-plant-form");
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
        // You can save this data to your database in a real application

        // Redirect to the confirmation page
        window.location.href = "confirmation.html";
    });
});

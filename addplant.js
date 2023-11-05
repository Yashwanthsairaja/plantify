document.addEventListener("DOMContentLoaded", function () {
    const addPlantForm = document.getElementById("add-plant-form");

    addPlantForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data and handle it (e.g., store in a database).
        // ...

        // Redirect to the confirmation page
        window.location.href = "confirmation.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Sample plant data (you can replace this with your data)
    const plantData = [
        {
            name: "Spider Plant",
            image: "plant1.jpg",
            status: "Healthy",
            wateringDue: "2 days",
            fertilizerDue: "5 days",
        },
        {
            name: "Aloe Vera",
            image: "plant2.jpg",
            status: "Healthy",
            wateringDue: "3 days",
            fertilizerDue: "6 days",
        },
        {
            name: "Fern",
            image: "plant3.jpg",
            status: "Infection",
            wateringDue: "1 day",
            fertilizerDue: "4 days",
        },
        {
            name: "Peace Lily",
            image: "plant4.jpg",
            status: "Healthy",
            wateringDue: "2 days",
            fertilizerDue: "5 days",
        },
        {
            name: "Snake Plant",
            image: "plant5.jpg",
            status: "Healthy",
            wateringDue: "3 days",
            fertilizerDue: "6 days",
        },
        {
            name: "Bamboo Palm",
            image: "plant6.jpg",
            status: "Infection",
            wateringDue: "1 day",
            fertilizerDue: "4 days",
        },
        {
            name: "ZZ Plant",
            image: "plant7.jpg",
            status: "Healthy",
            wateringDue: "2 days",
            fertilizerDue: "5 days",
        },
        {
            name: "Jade Plant",
            image: "plant8.jpg",
            status: "Healthy",
            wateringDue: "3 days",
            fertilizerDue: "6 days",
        },
        {
            name: "Rubber Plant",
            image: "plant9.jpg",
            status: "Infection",
            wateringDue: "1 day",
            fertilizerDue: "4 days",
        },
    ];

    // Function to create plant cards
    function createPlantCards() {
        const plantCards = document.getElementById("plant-cards");

        plantData.forEach((plant) => {
            const card = document.createElement("div");
            card.classList.add("plant-card");
            card.innerHTML = `
                <img src="${plant.image}" alt="${plant.name}">
                <div class="info">
                    <h3>${plant.name}</h3>
                    <p>Status: <span class="badge ${plant.status.toLowerCase()}">${plant.status}</span></p>
                    <p>Watering due in: ${plant.wateringDue}</p>
                    <p>Fertilizing due in: ${plant.fertilizerDue}</p>
                </div>
            `;

            plantCards.appendChild(card);
        });
    }
    

    // Call the function to create plant cards when the page loads
    createPlantCards();
});


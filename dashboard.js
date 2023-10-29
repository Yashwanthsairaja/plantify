// Simulated data (you can replace this with actual data)
const data = {
    activePlants: 20,
    activeReminders: 7,
    plantsOnDiagnosis: 3,
    attentionNeededPlants: [
        { name: 'Plant 1', condition: 'Water tomorrow' },
        { name: 'Plant 2', condition: 'Fertilize today' },
        // Add more plants as needed
    ],
};

// Update dashboard card counts
document.getElementById('active-plants-count').textContent = data.activePlants;
document.getElementById('active-reminders-count').textContent = data.activeReminders;
document.getElementById('plants-on-diagnosis-count').textContent = data.plantsOnDiagnosis;

// Create plant cards for plants needing attention
const attentionNeededPlantsContainer = document.querySelector('.attention-needed-plants');
data.attentionNeededPlants.forEach(plant => {
    const plantCard = document.createElement('div');
    plantCard.classList.add('plant-card');
    plantCard.innerHTML = `
        <img src="plant.jpg" alt="${plant.name}">
        <h3>${plant.name}</h3>
        <p>${plant.condition}</p>
    `;
    attentionNeededPlantsContainer.appendChild(plantCard);
});

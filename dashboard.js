// Sample static data
const staticData = {
    activePlants: 20,
    remindersSet: 7,
    plantsWithInfection: 3,
    plantList: [
        { name: 'Spider Plant', status: 'Healthy' },
        { name: 'Aloe Vera', status: 'Healthy' },
        { name: 'Fern', status: 'Infection' },
        { name: 'Snake Plant', status: 'Healthy' },
        { name: 'Peace Lily', status: 'Infection' },
    ]
};

// Update statistics and plant list
document.getElementById('activePlants').textContent = staticData.activePlants;
document.getElementById('remindersSet').textContent = staticData.remindersSet;
document.getElementById('plantsWithInfection').textContent = staticData.plantsWithInfection;

const plantList = document.getElementById('plantList');
staticData.plantList.forEach(plant => {
    const li = document.createElement('li');
    li.textContent = `${plant.name} - ${plant.status}`;
    plantList.appendChild(li);
});

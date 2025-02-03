async function fetchDigimon() {
    const digimonContainer = document.getElementById('digimon-container');
    
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        
        if (!response.ok) {
            throw new Error('Failed to fetch Digimon');
        }

        const allDigimon = await response.json();
        
        digimonContainer.innerHTML = '';
        const firstGenDigimon = allDigimon.filter(digimon => 
            digimon.level === "Rookie" || 
            digimon.level === "Champion" || 
            digimon.level === "Ultimate" || 
            digimon.level === "Mega"
        );

        firstGenDigimon.forEach(digimon => {
            const digimonCard = document.createElement('div');
            digimonCard.className = 'digimon-card';
            
            digimonCard.innerHTML = `
                <img src="${digimon.img}" alt="${digimon.name}" class="digimon-image">
                <h2>${digimon.name}</h2>
                <div class="digimon-info">
                    <span class="level-tag">Level: ${digimon.level}</span>
                </div>
            `;
            
            digimonContainer.appendChild(digimonCard);
        });
    } catch (error) {
        digimonContainer.innerHTML = `
            <div class="error">
                <p>Failed to load Digimon. Please try again later.</p>
                <p>Error: ${error.message}</p>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', fetchDigimon);

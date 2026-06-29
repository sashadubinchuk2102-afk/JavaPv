
async function fetchDogBreeds() {
    const list = document.getElementById('breed-list');
    
    try {
        list.innerHTML = '<li class="loader">Loading...</li>';
        
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
    
        const breeds = Object.keys(data.message);
        breeds.sort();
    
        list.innerHTML = '';
    
        for (let i = 0; i < breeds.length; i++) {
            const li = document.createElement('li');
            li.textContent = breeds[i].charAt(0).toUpperCase() + breeds[i].slice(1);
            list.appendChild(li);
        }
        
        console.log(' Loaded ' + breeds.length + ' breeds');
        
    } catch (error) {
        console.error(' Error:', error);
        list.innerHTML = '<li class="error">Failed to load breed list</li>';
    }
}

async function fetchRandomDog() {
    const img = document.getElementById('dogImg');
    
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        
        img.src = data.message;
        img.alt = 'Random Dog';
        
        console.log(' New dog photo loaded');
        
    } catch (error) {
        console.error(' Error:', error);
        img.alt = 'Failed to load dog photo';
    }
}

fetchDogBreeds();

fetchRandomDog();

document.getElementById('newDogBtn').onclick = fetchRandomDog;
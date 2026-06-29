document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const overlay = document.getElementById('modalOverlay');

    openBtn.addEventListener('click', function() {
        overlay.classList.add('active');
        console.log('Modal opened');
    });

    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
        console.log('Modal closed');
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.classList.remove('active');
            console.log('Modal closed by clicking overlay');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const lights = ['red', 'yellow', 'green'];
    let currentIndex = 0;
    const lightElements = {
        red: document.getElementById('redLight'),
        yellow: document.getElementById('yellowLight'),
        green: document.getElementById('greenLight')
    };
    const nextBtn = document.getElementById('nextLightBtn');

    function updateTrafficLight() {
        for (let color in lightElements) {
            lightElements[color].classList.remove('active');
        }
        lightElements[lights[currentIndex]].classList.add('active');
        console.log('Traffic light: ' + lights[currentIndex]);
    }

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % lights.length;
        updateTrafficLight();
    });

    updateTrafficLight();
});

document.addEventListener('DOMContentLoaded', function() {
    let progress = 0;
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const addBtn = document.getElementById('addProgressBtn');

    addBtn.addEventListener('click', function() {
        if (progress < 100) {
            progress = Math.min(progress + 5, 100);
            progressBar.style.width = progress + '%';
            progressText.textContent = progress + '%';
            console.log('Progress: ' + progress + '%');
        } else {
            console.log('Progress already at 100%');
        }
    });
});
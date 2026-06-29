function generateRandomNumber() {
    const number = Math.floor(Math.random() * 101); // 0 - 100
    const display = document.getElementById('randomNumberDisplay');
    display.textContent = number;
    console.log('Random number generated: ' + number);
}

document.addEventListener('DOMContentLoaded', function() {
    const mouseArea = document.getElementById('mouseArea');
    const coords = document.getElementById('coordinates');

    mouseArea.addEventListener('mousemove', function(event) {
        const rect = mouseArea.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        coords.textContent = 'X = ' + Math.round(x) + ', Y = ' + Math.round(y);
    });

    mouseArea.addEventListener('mouseleave', function() {
        coords.textContent = 'X = 0, Y = 0';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleText = document.getElementById('toggleText');
    let isHidden = false;

    toggleBtn.addEventListener('click', function() {
        if (isHidden) {
            toggleText.style.display = 'block';
            toggleBtn.textContent = 'Hide Text';
            isHidden = false;
        } else {
            toggleText.style.display = 'none';
            toggleBtn.textContent = 'Show Text';
            isHidden = true;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.deleteBtn');

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function() {
            const listItem = this.parentElement;
            listItem.style.display = 'none';
            console.log('News deleted');
        });
    }
});
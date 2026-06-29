document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this['loginName'].value;
    const password = this['loginPassword'].value;
    const remember = this['rememberMe'].checked;

    const result = document.getElementById('loginResult');
    const rememberText = remember ? 'remembered' : 'not remembered';
    result.textContent = 'Hello, ' + name + '! I ' + rememberText + ' you.';
    console.log('Login: ' + name + ', Remember: ' + remember);
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = this['registerEmail'].value;
    const login = this['registerLogin'].value;
    const password = this['registerPassword'].value;
    const repeat = this['registerRepeatPassword'].value;

    const result = document.getElementById('registerResult');

    if (password !== repeat) {
        result.textContent = 'Error: Passwords do not match!';
        result.style.borderLeftColor = '#e74c3c';
        return;
    }

    result.textContent = 'An email has been sent to ' + email + ' with confirmation.';
    result.style.borderLeftColor = '#2ecc71';
    console.log('Register: ' + login + ', Email: ' + email);
});

document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = this['firstName'].value;
    const lastName = this['lastName'].value;
    const birthday = this['birthday'].value;
    const gender = this['gender'].value;
    const country = this['country'].value;
    const city = this['city'].value;

    const skillCheckboxes = document.querySelectorAll('input[name="skills"]:checked');
    const skills = [];
    for (let i = 0; i < skillCheckboxes.length; i++) {
        skills.push(skillCheckboxes[i].value);
    }

    const result = document.getElementById('userInfoResult');
    let html = '<table border="1" cellpadding="6" style="border-collapse: collapse; width: 100%;">';
    html += '<tr><th>Firstname</th><td>' + firstName + '</td></tr>';
    html += '<tr><th>Lastname</th><td>' + lastName + '</td></tr>';
    html += '<tr><th>Birthday</th><td>' + birthday + '</td></tr>';
    html += '<tr><th>Gender</th><td>' + gender + '</td></tr>';
    html += '<tr><th>Country</th><td>' + country + '</td></tr>';
    html += '<tr><th>City</th><td>' + city + '</td></tr>';
    html += '<tr><th>Skills</th><td>' + skills.join(', ') + '</td></tr>';
    html += '</table>';

    result.innerHTML = html;
    console.log('User info saved');
});

document.getElementById('colorR').addEventListener('input', function() {
    document.getElementById('colorRValue').textContent = this.value;
});
document.getElementById('colorG').addEventListener('input', function() {
    document.getElementById('colorGValue').textContent = this.value;
});
document.getElementById('colorB').addEventListener('input', function() {
    document.getElementById('colorBValue').textContent = this.value;
});

document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const r = parseInt(this['colorR'].value);
    const g = parseInt(this['colorG'].value);
    const b = parseInt(this['colorB'].value);

    const palette = document.getElementById('colorPalette');
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    colorBox.textContent = 'RGB(' + r + ', ' + g + ', ' + b + ')';
    palette.appendChild(colorBox);

    console.log('Color added: RGB(' + r + ', ' + g + ', ' + b + ')');
});
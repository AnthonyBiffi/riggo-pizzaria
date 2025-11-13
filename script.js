
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️'; 
} else {
    themeToggle.textContent = '🌙'; 
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === '' || password === '') {
        message.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            message.textContent = 'Login bem-sucedido!';
        } else {
            message.textContent = 'Usuário ou senha incorretos.';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        message.textContent = 'Erro ao conectar ao servidor.';
    });
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Funcionalidade de recuperação de senha em desenvolvimento. Redirecione para /forgot-password.');

});

document.getElementById('createAccount').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Funcionalidade de criação de conta em desenvolvimento. Redirecione para /register.');
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/teste")
    .then(res => res.json())
    .then(data => console.log("Conexão SAP HANA OK:", data))
    .catch(err => console.error("Erro na conexão:", err));
});

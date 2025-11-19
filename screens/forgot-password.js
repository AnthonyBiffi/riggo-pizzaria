document.getElementById('forgotForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    if (!email) {
        message.textContent = 'Por favor, insira um email válido.';
        message.style.color = 'red';
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/users/forgot-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        const result = await response.json();

        if (!response.ok) {
            message.textContent = result.message || "Erro ao solicitar redefinição.";
            message.style.color = 'red';
            return;
        }

        message.textContent = "Um link para redefinir a senha foi enviado!";
        message.style.color = 'green';

    } catch (error) {
        message.textContent = "Erro ao conectar com o servidor.";
        message.style.color = "red";
    }
});

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
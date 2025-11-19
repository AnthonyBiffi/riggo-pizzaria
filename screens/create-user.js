document.getElementById('createForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (!name || !email || !password) {
        message.textContent = 'Todos os campos são obrigatórios.';
        message.style.color = 'red';
        return;
    }

    if (password.length < 6) {
        message.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        message.style.color = 'red';
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });

        const result = await response.json();

        if (!response.ok) {
            console.log("usuario já cadastrado");
            
            message.textContent = result.message || "Erro ao criar usuário.";
            message.style.color = "red";
            return;
        }

        // Sucesso
        message.textContent = "Conta criada com sucesso!";
        message.style.color = "green";

        document.getElementById('createForm').reset();

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
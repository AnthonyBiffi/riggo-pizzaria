        document.getElementById('forgotForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const message = document.getElementById('message');
            
            // Simulação de validação (em um projeto real, enviaria para o backend)
            if (email) {
                message.textContent = 'Um link para redefinir a senha foi enviado para seu email!';
                message.style.color = 'green';
            } else {
                message.textContent = 'Por favor, insira um email válido.';
                message.style.color = 'red';
            }
        });
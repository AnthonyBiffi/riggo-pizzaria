        // Simulação de banco de dados (array de emails existentes)
        const existingEmails = ['teste@example.com', 'usuario@dominio.com']; // Adicione emails reais aqui

        document.getElementById('createForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const message = document.getElementById('message');
            
            // Validações
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
            
            if (existingEmails.includes(email)) {
                message.textContent = 'Este email já está cadastrado. Escolha outro.';
                message.style.color = 'red';
                return;
            }
            
            // Simulação de sucesso (em um projeto real, enviaria para o backend)
            existingEmails.push(email); // Adiciona ao "banco" simulado
            message.textContent = 'Conta criada com sucesso!';
            message.style.color = 'green';
            
            // Limpa o formulário
            document.getElementById('createForm').reset();
        });
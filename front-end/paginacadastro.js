 function handleSignUp(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const passwordInput = document.getElementById('password');
            const confirmPasswordInput = document.getElementById('confirm-password');
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            const passwordError = document.getElementById('password-error');
            const username = document.getElementById('username').value;
            const modalMessage = document.getElementById('modal-message');

            passwordInput.classList.remove('error-border');
            confirmPasswordInput.classList.remove('error-border');
            passwordError.classList.add('hidden');

            // 1. Validação de senha 
            if (password !== confirmPassword) {
                passwordError.classList.remove('hidden');
                passwordInput.classList.add('error-border');
                confirmPasswordInput.classList.add('error-border');
                return;
            }

            // 2. Simulação de processamento de cadastro
            console.log("Tentativa de Cadastro...");

            // Atualiza a mensagem da modal
            modalMessage.textContent = `Seu cadastro de usuário '${username}' foi realizado com sucesso. Bem-vindo(a) à comunidade!`;

            // 3. Exibir a modal de sucesso
            const modal = document.getElementById('message-modal');
            const modalContent = modal.children[0];

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            // Timeout pro o CSS aplicar a transição
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
        }

        function closeModal() {
            const modal = document.getElementById('message-modal');
            const modalContent = modal.children[0];

            // Reverter animações
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');

            // Esconder a modal após a transição
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.getElementById('signup-form').reset();
            }, 300); 
        }
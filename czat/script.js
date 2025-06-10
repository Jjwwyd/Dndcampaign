document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    // Funkcja do dodawania wiadomości do okna czatu
    function addMessage(text, type) { // type może być 'sent' (wysłana) lub 'received' (odebrana)
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(type); // Dodajemy klasę 'sent' lub 'received'
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);

        // Przewiń okno czatu na dół, aby zawsze było widać najnowszą wiadomość
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Obsługa kliknięcia przycisku "Wyślij"
    sendButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            addMessage(messageText, 'sent'); // Dodajemy wiadomość jako wysłaną

            // Symulacja odpowiedzi (możesz usunąć tę część dla prostszego czatu jednokierunkowego)
            // Po krótkim opóźnieniu "odbieramy" wiadomość
            setTimeout(() => {
                addMessage("Odpowiedź: " + messageText, 'received'); // Dodajemy jako odebraną
            }, 1000); // Odpowiedź po 1 sekundzie

            messageInput.value = ''; // Wyczyść pole wprowadzania
        }
    });

    // Obsługa naciśnięcia klawisza Enter w polu wprowadzania
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click(); // Symuluj kliknięcie przycisku "Wyślij"
        }
    });

    // Dodaj przykładowe wiadomości przy ładowaniu strony
    addMessage("Witaj w prostym czacie!", 'received');
    addMessage("Wpisz wiadomość i naciśnij Enter lub Wyślij.", 'received');
});

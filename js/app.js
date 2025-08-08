document.addEventListener('DOMContentLoaded', function() {
  const chatHistory = document.getElementById('chat-history');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');  
  
  function addMessage(content, isUser) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
      messageElement.textContent = content;
      chatHistory.appendChild(messageElement);
      
      chatHistory.scrollTop = chatHistory.scrollHeight;
  }
  
  function sendQuery(query) {
      fetch('/api/query', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query })
      })
      .then(response => response.json())
      .then(data => {
          addMessage(data.response, false);
      })
      .catch(error => {
          console.error('Error sending query:', error);
          addMessage('Sorry, there was an error processing your request.', false);
      });
  }
  
  sendButton.addEventListener('click', function() {
      const query = userInput.value.trim();
      if (query.length === 0) return;
      
      addMessage(query, true);
      userInput.value = '';
      sendQuery(query);
  });
  
  userInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          sendButton.click();
      }
  });
  
  addMessage('Hello. Ask me anything about Jamie.', false);
});

document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");
  
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(section => {
      appearOnScroll.observe(section);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("visible");
  
    // Existing fade-in sections logic
    const faders = document.querySelectorAll(".fade-in");
  
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(section => {
      appearOnScroll.observe(section);
    });
  });
  
  
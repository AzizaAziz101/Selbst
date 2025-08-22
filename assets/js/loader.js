    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      const mainContent = document.getElementById('mainContent');

      setTimeout(() => {
        loader.style.display = 'none';
        mainContent.classList.add('fade-in');
      }, 5000); // Dauer der Animation + Puffer
    });
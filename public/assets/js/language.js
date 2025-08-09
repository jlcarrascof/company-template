document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    let currentLang = 'en'; // Idioma por defecto

    function updateLanguage(lang) {
      currentLang = lang;
      langText.textContent = lang === 'en' ? 'EN / ES' : 'ES / EN';
      window.location.href = `/${lang}/index.html`;
    }

    langToggle.addEventListener('click', () => {
      updateLanguage(currentLang === 'en' ? 'es' : 'en');
    });

    // Detectar idioma actual basado en la URL
    const path = window.location.pathname;
    if (path.includes('/es/')) {
      currentLang = 'es';
      langText.textContent = 'ES / EN';
    }
});

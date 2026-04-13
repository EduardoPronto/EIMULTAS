const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealItems.forEach(item => observer.observe(item));

const counter = document.querySelector('[data-counter]');
if (counter) {
  const target = Number(counter.dataset.counter) || 0;
  let started = false;
  const runCounter = () => {
    if (started) return;
    started = true;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = Math.floor(progress * target).toLocaleString('pt-BR');
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter();
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.45 });
  counterObserver.observe(counter);
}

const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('cookie-accept');
if (banner && acceptBtn) {
  const accepted = localStorage.getItem('eimultas_cookie_ok');
  if (!accepted) banner.hidden = false;
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('eimultas_cookie_ok', '1');
    banner.hidden = true;
  });
}

// Mobile menu
const ham = document.getElementById('hamburger');
const mm = document.getElementById('mobileMenu');
ham?.addEventListener('click', () => mm.classList.toggle('open'));
mm?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')));

// Copy handle
document.getElementById('copyBtn')?.addEventListener('click', async (e) => {
  const btn = e.currentTarget;
  try {
    await navigator.clipboard.writeText('@Silvestris0');
    btn.textContent = 'Kopyalandı';
  } catch {
    btn.textContent = '@Silvestris0';
  }
  setTimeout(() => (btn.textContent = 'Kullanıcı adını kopyala'), 1600);
});

// Per-service Telegram deep link with prefilled text
document.querySelectorAll('[data-svc]').forEach(a => {
  a.addEventListener('click', () => {
    const svc = a.getAttribute('data-svc');
    a.href = 'https://t.me/Silvestris0?text=' + encodeURIComponent(svc + ' + DETAY: ');
  });
});

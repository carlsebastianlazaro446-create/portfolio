const EMAIL = 'carlsebastianlazaro446@gmail.com';

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Copy email button
const copyBtn = document.getElementById('copy-email');
const status = document.getElementById('copy-status');

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    status.textContent = 'Email copied.';
  } catch (err) {
    status.textContent = 'Could not copy. Please copy it manually: ' + EMAIL;
  }
});

// Scroll reveal: fade sections in when they enter the screen
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}
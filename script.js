const catLinks = document.querySelectorAll('#category-list li');
const cards = document.querySelectorAll('.portfolio-card');
catLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('#category-list li.active').classList.remove('active');
    link.classList.add('active');
    const chosen = link.getAttribute('data-category');
    cards.forEach(card => {
      if (chosen === 'all' || card.dataset.category === chosen) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const card3d = card.querySelector('.card-3d');
    const rect = card3d.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const sx = x / rect.width - 0.5, sy = y / rect.height - 0.5;
    card3d.style.transform = `rotateY(${sx*22}deg) rotateX(${-sy*16}deg) scale(1.09)`;
  });
  card.addEventListener('mouseleave', () => {
    const card3d = card.querySelector('.card-3d');
    card3d.style.transform = '';
  });
});
cards.forEach(card => {
  const video = card.querySelector('video');
  card.addEventListener('mouseenter', () => { video.play(); });
  card.addEventListener('mouseleave', () => { video.pause(); video.currentTime=0; });
});

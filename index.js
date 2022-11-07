const btn = document.querySelector('.content__button');
const currentTheme = localStorage.getItem('theme');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  let theme = 'light';
  if (document.body.classList.contains("dark-theme")) {
    theme = 'dark';
  }
  localStorage.setItem('theme', theme);
})

if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
}
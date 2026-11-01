const body = document.body;
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const themeButton = document.querySelector('.theme-toggle');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });
  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    });
  });
}

const profilePhoto = document.querySelector('#profile-photo');
if (profilePhoto) {
  const showInitialsFallback = () => profilePhoto.remove();
  profilePhoto.addEventListener('error', showInitialsFallback, { once: true });
  if (profilePhoto.complete && profilePhoto.naturalWidth === 0) showInitialsFallback();
}

let savedTheme = null;
try { savedTheme = localStorage.getItem('dancelle-theme'); } catch (_) { /* Local file restrictions vary by browser. */ }
if (savedTheme === 'dark') body.dataset.theme = 'dark';

function updateThemeButton() {
  if (!themeButton) return;
  const isDark = body.dataset.theme === 'dark';
  themeButton.textContent = isDark ? 'Light mode' : 'Dark mode';
  themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}
updateThemeButton();

themeButton?.addEventListener('click', () => {
  const isDark = body.dataset.theme === 'dark';
  if (isDark) delete body.dataset.theme;
  else body.dataset.theme = 'dark';
  try { localStorage.setItem('dancelle-theme', isDark ? 'light' : 'dark'); } catch (_) { /* Theme still changes for this page view. */ }
  updateThemeButton();
});

function normalizeRoute(path) {
  let normalized = path.toLowerCase().replace(/index\.html$/, '');
  if (!normalized.endsWith('/')) normalized += '/';
  return normalized;
}

const currentUrl = new URL(window.location.href);
const currentPath = normalizeRoute(currentUrl.pathname);
const scriptUrl = document.currentScript ? new URL(document.currentScript.src) : currentUrl;
const siteRoot = normalizeRoute(new URL('.', scriptUrl).pathname);
const isLandingPage = currentPath === siteRoot;
document.querySelectorAll('.primary-nav a').forEach((link) => {
  const target = new URL(link.href);
  if (normalizeRoute(target.pathname) !== currentPath) return;
  if (isLandingPage) {
    const activeHash = currentUrl.hash || '#home';
    const targetHash = target.hash || '#home';
    if (targetHash === activeHash) link.setAttribute('aria-current', 'page');
  } else if (!target.hash) {
    link.setAttribute('aria-current', 'page');
  }
});

const projectCards = Array.from(document.querySelectorAll('.project-card'));
if (projectCards.length) {
  const search = document.querySelector('#project-search');
  const category = document.querySelector('#project-category');
  const type = document.querySelector('#project-type');
  const emptyMessage = document.querySelector('.filter-empty');

  function filterProjects() {
    const query = (search?.value || '').trim().toLowerCase();
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const text = `${card.textContent} ${card.dataset.search || ''}`.toLowerCase();
      const matchesText = !query || text.includes(query);
      const matchesCategory = !category?.value || category.value === 'all' || card.dataset.category === category.value;
      const matchesType = !type?.value || type.value === 'all' || card.dataset.type === type.value;
      const visible = matchesText && matchesCategory && matchesType;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (emptyMessage) emptyMessage.hidden = visibleCount > 0;
  }
  [search, category, type].forEach((control) => control?.addEventListener('input', filterProjects));
  [category, type].forEach((control) => control?.addEventListener('change', filterProjects));
}

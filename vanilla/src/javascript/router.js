const routes = {
  '/': 'views/home.html',
  '/accordion': 'views/accordion.html',
  '/tabMenu': 'views/tabMenu.html',
  '/tooltip': 'views/tooltip.html',
  '/textBox': 'views/textBox.html',
  '/lineClamp': 'views/lineClamp.html',
  '/lazyLoading': 'views/lazyLoading.html',
  '/infiniteScroll': 'views/infiniteScroll.html',
  '/scrollBox': 'views/scrollBox.html',
  '/scrollSpy': 'views/scrollSpy.html',
  '/snackbar': 'views/snackbar.html',
  '/modal': 'views/modal.html',
  '/popover': 'views/popover.html',
  '/imageSlide': 'views/imageSlide.html',
  '/carousel': 'views/carousel.html',
  '/gallery': 'views/gallery.html',
  '/selectBox': 'views/selectBox.html',
  '/autoComplete': 'views/autoComplete.html',
  '/dnd': 'views/dnd.html',
  '404': 'views/404.html',
};


const appContent = document.getElementById('app-content');


async function loadContent(path) {
  const filePath = routes[path] || routes['404'];
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('Content file not found');
    }
    const html = await response.text();
    appContent.innerHTML = html;
  } catch (error) {
    console.error('Error loading content:', error);
    appContent.innerHTML = '<h2>오류 발생</h2><p>페이지를 로드할 수 없습니다.</p>';
  }
}

function router() {
  const path = window.location.pathname;
  loadContent(path).then(r => r).catch(e => console.error(e));
}


function route(event) {
  event.preventDefault();
  const href = event.target.getAttribute('href');
  window.history.pushState({}, '', href);
  router();
}

window.addEventListener('popstate', router); // 브라우저의 뒤로/앞으로 버튼 감지
document.addEventListener('DOMContentLoaded', router); // 페이지 로드 시 최초 렌더링
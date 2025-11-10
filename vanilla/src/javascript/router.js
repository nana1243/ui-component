import { gnbRootList, routes } from '../constants/routes.js';

const APP_BASE_PATH = 'react-vanlia-ui/vanilla/src';
const appContent = document.getElementById('app-content');

async function loadContent(path) {
  const filePath = routes[path] || routes['404'];
  console.log('filePath:', filePath);

  appContent.innerHTML = `<div class='p-8 text-center text-gray-500'>콘텐츠 로딩 중...</div>`;

  try {
    const response = await fetch(`${APP_BASE_PATH}/${filePath}`);
    if (!response.ok) {
      throw new Error(`File not found or network error: ${filePath}`);
    }
    appContent.innerHTML = await response.text();
    highlightActiveLink(path);

  } catch (error) {
    console.error('Error loading content:', error);
    // 에러 발생 시 404/에러 메시지 표시
    appContent.innerHTML = routes['404'] ? await (await fetch(routes['404'])).text() : '<h2>Error</h2><p>Failed to load content and 404 page.</p>';
  }
}

function highlightActiveLink(currentPath) {
  document.querySelectorAll('.sidebarNav .navLink').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

export function route(event) {
  // 1. 기본 페이지 이동(새로고침) 방지
  event.preventDefault();

  // 2. 이동할 경로를 href 속성에서 가져옵니다.
  const href = event.currentTarget.getAttribute('href');
  if (!href) return;

  // 3. 페이지 새로고침 없이 URL을 변경합니다.
  window.history.pushState({}, '', href);

  loadContent(href);
}


/**
 * gnbRootList를 사용하여 사이드바 메뉴를 동적으로 생성합니다.
 */
function createSidebarNavigation() {
  const sidebarNav = document.querySelector('.sidebarNav');
  if (!sidebarNav) return;

  // 메뉴를 생성하고 클릭 이벤트를 연결합니다.
  gnbRootList.forEach(routeData => {
    const listItem = document.createElement('li');
    listItem.classList.add('navItem');

    const anchor = document.createElement('a');
    anchor.href = routeData.link;
    anchor.textContent = routeData.name;
    anchor.classList.add('navLink');

    // 라우팅 함수 연결 (핵심)
    anchor.addEventListener('click', route);

    listItem.appendChild(anchor);
    sidebarNav.appendChild(listItem);
  });
}


function router() {
  // 현재 브라우저의 경로를 가져옵니다.
  const path = window.location.pathname;
  loadContent(path);
}


// 1. 최초 페이지 로드 시 라우팅 실행
document.addEventListener('DOMContentLoaded', () => {
  createSidebarNavigation();

  const sidebarHeaderLink = document.querySelector('.sidebarHeader a[href="/"]');
  if (sidebarHeaderLink) {
    sidebarHeaderLink.addEventListener('click', route);
  }

  router();
});

window.addEventListener('popstate', router);
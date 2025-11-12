import { gnbRootList, routes } from './constants/routes.js';

const APP_BASE_PATH = 'src';
const appContent = document.getElementById('app-content');


/**
 * 뷰 로드 후, 해당 뷰의 JavaScript 컴포넌트를 초기화합니다.
 * @param {string} path 현재 해시 경로 (예: '/accordion')
 */


async function loadContent(path) {
  // Hash 경로를 기반으로 파일 경로를 찾습니다.
  const filePath = routes[path] || routes['/404'];
  console.log('Path:', path, 'FilePath:', filePath);

  appContent.innerHTML = `<div class='p-8 text-center text-gray-500'>콘텐츠 로딩 중...</div>`;

  try {
    const response = await fetch(`${APP_BASE_PATH}/${filePath}`);
    if (!response.ok) {
      throw new Error(`File not found or network error: ${filePath}`);
    }
    appContent.innerHTML = await response.text();
    highlightActiveLink(path);

    const find = gnbRootList.find(routeData => routeData.link === path);
    if (find && find.init) {
      // 해당 경로에 대한 init 함수가 있으면 호출하여 컴포넌트 초기화
      find.init();

    }

  } catch (error) {
    console.error('Error loading content:', error);
    // 에러 발생 시 404/에러 메시지 표시
    appContent.innerHTML = routes['/404'] ? await (await fetch(`${APP_BASE_PATH}/${routes['/404']}`)).text() : '<h2>Error</h2><p>Failed to load content and 404 page.</p>';
  }
}

function highlightActiveLink(currentPath) {
  document.querySelectorAll('.sidebarNav .navLink').forEach(link => {
    // Hash 기반 경로와 비교
    if (link.getAttribute('href') === `#${currentPath}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

export function route(event) {
  // 1. 기본 페이지 이동(새로고침) 방지
  event.preventDefault();

  // 2. 이동할 경로를 href 속성에서 가져옵니다 (예: '#/accordion').
  const href = event.currentTarget.getAttribute('href');
  if (!href) return;

  // 3. 페이지 새로고침 없이 URL 해시를 변경합니다.
  // window.location.hash를 변경하면 자동으로 'hashchange' 이벤트가 발생하고 router()가 호출됩니다.
  window.location.hash = href.substring(1);
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
    // **href를 Hash 경로로 변경합니다.**
    anchor.href = `#${routeData.link}`;
    anchor.textContent = routeData.name;
    anchor.classList.add('navLink');

    // 라우팅 함수 연결
    anchor.addEventListener('click', route);

    listItem.appendChild(anchor);
    sidebarNav.appendChild(listItem);
  });
}


function router() {
  // 현재 브라우저의 Hash를 가져옵니다. (예: '#/accordion' -> '/accordion')
  // 해시가 없을 경우 (index.html만 로드된 경우) '/'를 기본 경로로 설정합니다.
  const path = window.location.hash.substring(1) || '/';
  loadContent(path);
}


// 1. 최초 페이지 로드 시 라우팅 실행
document.addEventListener('DOMContentLoaded', () => {
  createSidebarNavigation();

  // 헤더 링크의 클릭 이벤트를 해시 변경으로 수정
  const sidebarHeaderLink = document.querySelector('.sidebarHeader a[href="/"]');
  if (sidebarHeaderLink) {
    sidebarHeaderLink.href = '#/'; // HTML의 href 속성도 Hash로 변경
    sidebarHeaderLink.addEventListener('click', route);
  }

  // URL에 해시가 없다면 강제로 홈 경로를 설정하여 router()를 실행합니다.
  if (!window.location.hash) {
    window.location.hash = '#/';
    // window.location.hash 변경 시 hashchange 이벤트가 발생하고 router()가 호출됩니다.
  } else {
    // 이미 해시가 있는 경우 (예: #/accordion) 최초 로드 시 router()를 직접 호출합니다.
    router();
  }
});

// **History API (popstate) 대신 Hashchange 이벤트 사용**
window.addEventListener('hashchange', router);
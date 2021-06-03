`use strict`;
const ajax = new XMLHttpRequest();
// sever에서 data를 가져오는 오브젝트 생성기
const content = document.createElement(`div`);
const HACKER_URL = `https://api.hnpwa.com/v0/news/1.json`;
const COMMENT_URL = `https://api.hnpwa.com/v0/item/@id.json`;
ajax.open(`GET`, HACKER_URL, false);
// 서버에서 받아온 데이터를 오픈한다.
// false 동기 true 비동기
ajax.send();
const news = JSON.parse(ajax.response);
const ul = document.createElement(`ul`);
window.addEventListener(`hashchange`, () => {
  const id = location.hash.substr(1);
  ajax.open(`GET`, COMMENT_URL.replace(`@id`, id), false);
  ajax.send();
  const newsContent = JSON.parse(ajax.response);
  const title = document.createElement(`h1`);
  title.innerHTML = newsContent.title;
  content.appendChild(title);
});
for (let i = 0; i < 10; i++) {
  const a = document.createElement(`a`);
  const li = document.createElement(`li`);
  a.innerHTML = `${news[i].title} (${news[i].comments_count})`;
  a.href = `#${news[i].id}`;
  li.appendChild(a);
  ul.appendChild(li);
}
const body = document.querySelector(`.root`);
body.appendChild(ul);
body.appendChild(content);

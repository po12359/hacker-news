`use strict`;
const ajax = new XMLHttpRequest();
// sever에서 data를 가져오는 오브젝트 생성기
const HACKER_URL = `https://api.hnpwa.com/v0/news/1.json`;
ajax.open(`GET`, HACKER_URL, false);
// 서버에서 받아온 데이터를 오픈한다.
// false 동기 true 비동기
ajax.send();
const news = JSON.parse(ajax.response);
const ul = document.createElement(`ul`);
for (let i = 0; i < 10; i++) {
  const li = document.createElement(`li`);
  li.innerHTML = news[i].title;
  ul.appendChild(li);
}
document.querySelector(`.root`).appendChild(ul);

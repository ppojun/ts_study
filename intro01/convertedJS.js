let title = document.querySelector('#title');
//셀렉터로 찾은 쿼리는 null일수도 있기에 체크해야함
//1번째 방법
if (title != null) {
    title.innerHTML = 'welcome';
}
//2번째 방법 title이 element의 하위
if (title instanceof Element) {
    title.innerHTML = 'welcome';
}
//3번째 방법 as로 사기치기
let title2 = document.querySelector('#title');
//4번째 방법 옵셔널체이닝 문법
if (title?.innerHTML) {
    title.innerHTML = 'welcome';
}
let link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com';
}
let link2 = document.querySelector('#button');
link2?.addEventListener('click', function () {
});

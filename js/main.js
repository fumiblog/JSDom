'use strict'
{
  //10.要素を追加してみよう
  document.querySelector('button').addEventListener('click', () => {
    const item2 = document.createElement('li');
    item2.textContent = 'item 2';
    const ul = document.querySelector('ul');
    ul.appendChild(item2);
  });

  //9.カスタムデータ属性を扱ってみよう
  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');
  // targetNode.textContent = 'Dotinstall!';
  // targetNode.textContent = targetNode.dataset.translation;
  // });
  //8.classListを使ってみよう
  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');
  // targetNode.classList.add('my-color');
  // if (targetNode.classList.contains('my-color') === true) {
  //   targetNode.classList.remove('my-color');
  // } else {
  //   targetNode.classList.add('my-color');
  // }
  //   targetNode.classList.toggle('my-color');
  // });

  //7.classNameを操作してみよう
  // document.querySelector('button').addEventListener('click', () => {
  //   const targetNode = document.getElementById('target');
  //   targetNode.className = 'my-color my-border';
  // });

  //5.addEventListener()を使ってみよう
  // document.querySelector('button').addEventListener('click', () => {
  //   document.getElementById('target').textContent = "Changed!";
  // });

  //4.要素の取得方法を理解しよう
  // id属性：getElementById ('target')
  // 一つの要素：querySelector('section h1')
  // 複数の要素：querySelectorAll('ul > li')
  // 階層から要素を取得
  // ul.childNodes
  // ul.children
  // ul.firstChild
  // ul.firstElementChild
  // li.parentNode 子から親

  //3.複数の要素を取得してみよう
  // function update() {
  //   document.querySelectorAll('p')[1].textContent = "Changed!";
  //   document.querySelectorAll('p').forEach((p, index) => {
  //     p.textContent = `${index}番目のpです！`;
  //   });
  // }
  // setTimeout(update, 1000);

  //2.要素を操作してみよう
  // function update() {
  //   document.getElementById('target').textContent = "Changed!";
  // }
  // setTimeout(update, 1000);

  //1.DOM について理解しよう
}

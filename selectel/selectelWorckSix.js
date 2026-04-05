/* Задание №1
Предположим, на странице есть заголовок:
<h1 class="title">Старый заголовок</h1>.
Напишите две строчки JS-кода, которые сделают следующее.
Найдут этот элемент и сохранят его в переменную.
Заменят его текст на «Привет, мир!». */


const titleEl = document.querySelector('.title');

titleEl.textContent = 'Привет мир!'


/* Задание №2
Есть кнопка:
<button class="btn">Нажми</button>.
И есть CSS-класс .active, который делает кнопку зеленой.
Напишите код, который найдет кнопку и добавит ей класс active. */


const btnEl = document.querySelector('.btn');

btnEl.classList.add('active');





/* Задание №3
На странице есть список из трех элементов:
<li class="item">Один</li>
<li class="item">Два</li>
<li class="item">Три</li>
Напишите код, который найдет все эти элементы и покрасит их текст в синий цвет, добавив каждому класс blue-text. */


//	ПРАКТИКОВАТЬ ОСОБО ПОКА ЧТО НЕ ПОНИМАЮ КАК РАБОТАТЬ С ЭТИМ!!!!

const itemEl = document.querySelectorAll('.item')

for (const item of itemEl) {
	item.classList.add('blueText')
}




/* Задание №4
Создайте новый div-элемент в памяти JS.
Напишите внутри него текст «Я новый блок».
Добавьте этот div в конец тела страницы (document.body). */

const blockEl = document.createElement('div');

blockEl.textContent = 'Я новый блок';

document.body.append(blockEl);





/* Задание №5
На странице есть назойливая реклама:
<div id="banner">Купи слона!</div>.
Напишите код, который найдет этот баннер по его ID и удалит его со страницы. */

const bannerEl = document.querySelector('#banner');

bannerEl.remove()












// поиск элемента по классу(.class), по id(#id), по тегу(h1)
const contentEl = document.querySelector('.content');


// создание HTML элементов 
const h2El = document.createElement('h2');
const pEl = document.createElement('p');


// добавление HTML элементов в блок contentEl: prepend - добавляет в начало / append - добавляет в конец
contentEl.prepend(h2El);
contentEl.append(pEl);


// добавление текста в переменные тегов HTML
h2El.textContent = 'Название статьи';
pEl.textContent = 'В этой стаье мы разобрались как добавлять текст в HTML теги через JS!!!'




// пример callback функции!!!
function ageFunc(age) {
	const ageTrueAndFalse = age >= 18 ? 'Добро пожаловать на наш взрослый сайт!' : "Извините, доступ только для совершеннолетних"
	alert(ageTrueAndFalse)
}

function inputAge(callback) {
	const userAge = prompt('Введите ваш возраст!')
	callback(userAge)
}

inputAge(ageFunc)




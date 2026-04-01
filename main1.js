let count = 0;

const btnEl = document.querySelector('.myButton');
const countEl = document.querySelector('.counter');

function newCount() {
	count++
	countEl.textContent = `Счетчик: ${count}`;
}

btnEl.onclick = function () {
	countEl.textContent = `Счетчик: ${count}`;

}

btnEl.onclick = newCount
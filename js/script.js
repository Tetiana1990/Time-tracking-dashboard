const cardsContainer = document.getElementById('cards');
const buttons = document.querySelectorAll('[data-period]');
let currentPeriod = 'weekly';

fetch('data.json')
.then(res => res.json())
.then(data => renderCards(data));

buttons.forEach(btn => {btn.addEventListener('click', () => {
	buttons.forEach(b => b.classList.remove('active'));
	btn.classList.add('active');
	currentPeriod = btn.dataset.period;

	fetch('data.json')
	.then(res => res.json())
	.then(data => renderCards(data));
});
});

function renderCards(data){
	cardsContainer.innerHTML = '';

	data.forEach(item => {
		const key =
		item.title.toLowerCase().replace(' ', '');
		const time = item.timeframes[currentPeriod];

		cardsContainer.innerHTML += `
		<div class="card">
		<div class="card-bar ${key}">
		<img src="images/${item.icon}".svg alt="${item.title}">
		</div>
		<div class ="card-content">
		<div class ="card-header">
		<span>${item.title}</span>
		<span>...</span>
		</div>
		<div class="card-time">
		<h2>${time.current}hrs</h2>
		<p>Last ${currentPeriod} - ${time.previous}hrs</p>
		</div>
		</div>
		</div>
		`;
		
});
}
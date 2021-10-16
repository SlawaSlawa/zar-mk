'use strict';
const divArenasEl = document.querySelector('.arenas');
const randomBtnEl = document.querySelector('.button');

const player1 = {
	player: 1,
	name: 'SCORPION',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['sai', 'knife'],
	attack: function() {
		console.log('Scorpion' + ' ' + 'Fight...');		
	}
};

const player2 = {
	player: 2,
	name: 'SUB-ZERO',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['freezing', 'knife'],
	attack: function() {
		console.log('Sub-Zero' + ' ' + 'Fight...');		
	}
};


function createElement(tag, className) {
	const element = document.createElement(tag);

	if (className) {
		element.classList.add(className);
	}

	return element;
}

function createPlayer(playerObj) {
	const divPlayerEl = createElement('div', 'player' + playerObj.player);
	const divProgressbarEl = createElement('div', 'progressbar');
	const divCharacterEl = createElement('div', 'character');
	const divLifeEl = createElement('div', 'life');
	divLifeEl.style.width = playerObj.hp + '%';

	const divNameEl = createElement('div', 'name');
	divNameEl.innerText = playerObj.name;

	const imgPlayerEl = createElement('img');
	imgPlayerEl.src = playerObj.img;
	imgPlayerEl.alt = playerObj.name;

	divProgressbarEl.appendChild(divLifeEl);
	divProgressbarEl.appendChild(divNameEl);

	divCharacterEl.appendChild(imgPlayerEl);


	divPlayerEl.appendChild(divProgressbarEl);
	divPlayerEl.appendChild(divCharacterEl);

	return divPlayerEl;
}

function changeHP(player) {
	const playerLife = document.querySelector('.player' + player.player + ' .life');
	player.hp -= getHP();
	playerLife.style.width = player.hp + '%';

	if (player.hp < 0) {
		randomBtnEl.removeEventListener('click', getAttack);
		player.hp = 0;
		playerLife.style.width = player.hp + '%';
		randomBtnEl.disabled = true;
		randomBtnEl.style.background = '#a99108';
			if (player.player === 1) {
				divArenasEl.appendChild(getResultToFight(player2.name));
			}else {
				divArenasEl.appendChild(getResultToFight(player1.name));
			}
console.log(divArenasEl.querySelectorAll('.winTitle').length);
			if (divArenasEl.querySelectorAll('.winTitle').length > 1) {
				getResultToFight('Friendship');
			}
	}
}

function getResultToFight(name) {
	const winTitle = createElement('div', 'winTitle');
	if (name !== 'Friendship') {
		winTitle.innerText = name + ' win';
	}else {
		winTitle.innerText = '';
		winTitle.innerText = 'Friendship';
	}

	return winTitle;
}

function getHP() {
	return Math.ceil(Math.random() * 20);
}

function getAttack() {
	changeHP(player1);
	changeHP(player2);
}

randomBtnEl.addEventListener('click', getAttack);

divArenasEl.appendChild(createPlayer(player1));
divArenasEl.appendChild(createPlayer(player2));


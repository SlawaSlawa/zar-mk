'use strict';

const player1 = {
	name: 'SCORPION',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['sai', 'knife'],
	attack: function() {
		console.log('Scorpion' + ' ' + 'Fight...');		
	}
};

const player2 = {
	name: 'SUB-ZERO',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['freezing', 'knife'],
	attack: function() {
		console.log('Sub-Zero' + ' ' + 'Fight...');		
	}
};

const divArenasEl = document.querySelector('.arenas');

function createPlayer(className, player) {
	const divPlayerEl = document.createElement('div');
	divPlayerEl.classList.add(className);

	const divProgressbarEl = document.createElement('div');
	divProgressbarEl.classList.add('progressbar');

	const divCharacterEl = document.createElement('div');
	divCharacterEl.classList.add('character');

	const divLifeEl = document.createElement('div');
	divLifeEl.classList.add('life');
	divLifeEl.style.width = player.hp + '%';

	const divNameEl = document.createElement('div');
	divNameEl.classList.add('name');
	divNameEl.innerText = player.name;

	const imgPlayerEl = document.createElement('img');
	imgPlayerEl.src = player.img;

	divPlayerEl.appendChild(divProgressbarEl);
	divPlayerEl.appendChild(divCharacterEl);

	divProgressbarEl.appendChild(divLifeEl);
	divProgressbarEl.appendChild(divNameEl);

	divCharacterEl.appendChild(imgPlayerEl);

	divArenasEl.appendChild(divPlayerEl);

	console.log(divArenasEl);
}

createPlayer('player1', player1);
createPlayer('player2', player2);

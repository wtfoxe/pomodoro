let duration = 60 * 20; // duração de 20 minutos
let timerDisplay = document.getElementById('timerDisplay'); // display do tempo
let stop // se == 0 diminui a contagem, se == 1 para a contagem
let time // variavel que vai conter o valor do tempo

let btnStart = document.querySelector('#start');
let btnStop = document.querySelector('#stop');
let btnRestart = document.querySelector('#restart');


// mostra o tempo inicial no display
window.onload = 
	timerDisplay.textContent = '20 : 00';

// formatando o horario
function formatTime(){
	let m = parseInt(duration / 60, 10);
	let s = parseInt(duration % 60, 10);
		
	m = m < 10 ? '0' + m : m; // se verdadeiro, m passa a ser string
	s = s < 10 ? '0' + s : s; // se verdadeiro, s passa a ser string

	time = `${m} : ${s}`;
}

// mostra na tela a contagem regressiva
function displayTimer(){
	let interval = setInterval( function(){

		if (stop == 1) {
			clearInterval(interval);
			btnStart.disabled = false;

		} else if (stop == 0){
			btnStart.disabled = true;
			formatTime(); // chama função que informa o horario
			duration -= 1; // diminui 1seg da duração total
			timerDisplay.textContent = time; // mostra o tempo no display
		}
	}, 1000);
}

// inicia a contagem
function startTimer(){
	stop = 0; 
	displayTimer();
}

// para a contagem
function stopTimer(){
	stop = 1;
	displayTimer();
}

function restartTimer(){
	stop = 1;
	displayTimer();

	duration = 60 * 20;
	formatTime();
	timerDisplay.textContent = time; // mostra o tempo no display
}
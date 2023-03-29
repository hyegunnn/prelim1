const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	const filipino = Number(document.getElementById('filipino').value);
	const christianLiving = Number(document.getElementById('christianLiving').value);
	const algebra = Number(document.getElementById('algebra').value);
	const physics = Number(document.getElementById('physics').value);
	const english = Number(document.getElementById('english').value);
	const pe = Number(document.getElementById('pe').value);
	const ntsp = Number(document.getElementById('ntsp').value);
	const philHistory = Number(document.getElementById('philHistory').value);

	const average = (filipino + christianLiving + algebra + physics + english + pe + ntsp + philHistory) / 8;

	let resultStatus = '';
	if (average >= 60 && average <= 100) {
		resultStatus = '⭐PASSED⭐';
	} else if (average >= 0 && average < 60) {
		resultStatus = 'FAILED 💔';
	} else {
		resultStatus = 'INVALID 😶';
		
	}

	const resultDiv = document.createElement('div');
	resultDiv.classList.add('result');
	resultDiv.textContent = `Average Grade: ${average.toFixed(2)} (${resultStatus})`;

	form.appendChild(resultDiv);
});

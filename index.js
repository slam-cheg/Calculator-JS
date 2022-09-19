const calculator = document.querySelector(".calculator");
const input = calculator.querySelector(".input");
const inputData = calculator.querySelector(".data-num");
const submitBtn = calculator.querySelector(".submit-btn");
const operators = calculator.querySelectorAll(".operator-btn");
const digits = calculator.querySelectorAll(".num-btn");
const clearBtn = calculator.querySelector(".clear");
let firstNum, operator, secondNum, result;

operators.forEach((btn) =>
	btn.addEventListener("click", (evt) => {
		evt.preventDefault();
		firstNum = Number(input.value);
		operator = btn.id;
		inputData.dataset.num = `${firstNum} ${operator}`;
		input.value = "";
	})
);

digits.forEach((btn) => {
	btn.addEventListener("click", (evt) => {
		evt.preventDefault();
		digitInput(btn.textContent);
	});
});

clearBtn.addEventListener("click", clearAll);
submitBtn.addEventListener("click", (evt) => {
	evt.preventDefault();
	submit(firstNum, operator);
});
window.addEventListener("keyup", keys);

function submit(firstNum, operator) {
	secondNum = Number(input.value);
	switch (operator) {
		case "-":
			result = firstNum - secondNum;
			inputData.dataset.num = `${firstNum} ${operator} ${secondNum} =`;
			break;
		case "+":
			result = firstNum + secondNum;
			inputData.dataset.num = `${firstNum} ${operator} ${secondNum} =`;
			break;
		case "/":
			if (secondNum === 0) {
				result = NaN;
			} else {
				result = firstNum / secondNum;
			}
			inputData.dataset.num = `${firstNum} ${operator} ${secondNum} =`;
			break;
		case "*":
			result = firstNum * secondNum;
			inputData.dataset.num = `${firstNum} ${operator} ${secondNum} =`;
			break;
	}

	input.placeholder = result;
	input.value = "";
}

function digitInput(num) {
	input.value += Number(num);
}

function keys(evt) {
	evt.preventDefault();
	console.log(evt);
	switch (evt.key) {
		case "Enter":
			submit(firstNum, operator);
			break;
		case "1":
			digitInput(evt.key);
			break;
		case "2":
			digitInput(evt.key);
			break;
		case "3":
			digitInput(evt.key);
			break;
		case "4":
			digitInput(evt.key);
			break;
		case "5":
			digitInput(evt.key);
			break;
		case "6":
			digitInput(evt.key);
			break;
		case "7":
			digitInput(evt.key);
			break;
		case "8":
			digitInput(evt.key);
			break;
		case "9":
			digitInput(evt.key);
			break;
		case "0":
			digitInput(evt.key);
			break;
		case ",":
			input.value += ",";
			break;
		case "-":
			console.log(evt.key);
			firstNum = Number(input.value);
			operator = evt.key;
			inputData.dataset.num = `${firstNum} ${operator}`;
			input.value = "";
			break;
		case "+":
			firstNum = Number(input.value);
			operator = evt.key;
			inputData.dataset.num = `${firstNum} ${operator}`;
			input.value = "";
			break;
		case "*":
			console.log(evt.key);
			firstNum = Number(input.value);
			operator = evt.key;
			inputData.dataset.num = `${firstNum} ${operator}`;
			input.value = "";
			break;
		case "/":
			console.log(evt.key);
			firstNum = Number(input.value);
			operator = evt.key;
			inputData.dataset.num = `${firstNum} ${operator}`;
			input.value = "";
			break;
		case "Delete":
			clearAll();
			break;
		case "=":
			submit(firstNum, operator, evt);
			break;
	}
}

function clearAll() {
	input.value = "";
	firstNum = "";
	operator = "";
	secondNum = "";
	input.placeholder = 0;
}

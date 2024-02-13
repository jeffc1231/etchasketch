function makeGrid(size, container) {
	
	container.innerHTML = '';

	
	const cellSize = 1020 / size;

	for (let i = 0; i < size; i++) {
		let column = document.createElement("div")
		column.style.width = `${cellSize}px`; 

		for (let j = 1; j <= size; j++) {
			let row = document.createElement("div")
			row.style.border = "1px solid rgb(20 20 20)";
			row.style.width = "100%";
			row.style.height = `${cellSize}px`;
			column.appendChild(row);
		}

		container.appendChild(column)
	}
}




let container = document.getElementById("div-parent")
let number = document.getElementById("number")
let inputValue = 0
number.addEventListener("change", (e) => {
	let num = Number(e.target.value)
	if (num >= 1 && num <= 100) {
		return inputValue = num
	} else {
		alert("Lo siento, solo se admiten números entre el 1 y el 100")
	}
})

function newGrid() {

	if (inputValue >= 1 && inputValue <= 100) {
		
		makeGrid(inputValue, container)
	} else {
		alert("Debe de ingresar un numero entre 1 y 100")
	}
}

makeGrid(16, container)

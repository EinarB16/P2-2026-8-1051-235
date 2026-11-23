// 1. Cálculo del cubo de un número
function calcularCubo() {
    // Obtiene el valor ingresado en el campo NumCubo y lo convierte a número decimal
    const valorInput = document.getElementById("NumCubo").value.trim();
    const resultado = document.getElementById("resultadoCubo");
    const numero = parseFloat(valorInput);

    // Verifica que el campo no esté vacío y que sea un número válido
    if (valorInput === "" || isNaN(numero)) {
        resultado.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    // Calcula el cubo del número 
    const cubo = Math.pow(numero, 3);

    // Muestra el resultado en pantalla
    resultado.textContent = `El cubo de ${numero} es: ${cubo}`;
}

// 2. Cálculo del área de un triángulo
function calcularArea() {
    // Obtiene los valores de base y altura desde los campos donde se deben ingresar los datos
    const baseInput = document.getElementById("NumBase").value.trim();
    const alturaInput = document.getElementById("NumAltura").value.trim();
    const resultado = document.getElementById("resultadoCuadrado");

    const base = parseFloat(baseInput);
    const altura = parseFloat(alturaInput);

    // Valida que ambos valores sean números positivos mayores que cero
    if (baseInput === "" || alturaInput === "" || isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, ingresa valores numéricos mayores a 0 para la base y la altura.";
        return;
    }

    // Aplica la fórmula: (base * altura) / 2
    const area = (base * altura) / 2;
    const areaFormateada = Number.isInteger(area) ? area : area.toFixed(2);

    // Muestra el mensaje descriptivo con el área calculada
    resultado.textContent = `El área en metros cuadrados del triángulo es: ${areaFormateada}`;
}

// 3. Cálculo de promedio de calificaciones
function CalcularProm() {
    // Obtiene el nombre del estudiante y las tres calificaciones
    const nombre = document.getElementById("Estudiante").value.trim();
    const c1Input = document.getElementById("Cali1").value.trim();
    const c2Input = document.getElementById("Cali2").value.trim();
    const c3Input = document.getElementById("Cali3").value.trim(); 
    const resultado = document.getElementById("resultadoPromedio");

    const cali1 = parseFloat(c1Input);
    const cali2 = parseFloat(c2Input);
    const cali3 = parseFloat(c3Input);

    // Valida que el nombre no esté vacío y que las tres calificaciones sean válidas
    if (nombre === "") {
        resultado.textContent = "Por favor, escribe el nombre del estudiante.";
        return;
    }

    if (
        c1Input === "" || c2Input === "" || c3Input === "" ||
        isNaN(cali1) || isNaN(cali2) || isNaN(cali3)
    ) {
        resultado.textContent = "Por favor, ingresa las tres calificaciones numéricas.";
        return;
    }

    // Calcula el promedio de las tres notas y lo redondea a 2 decimales
    const promedio = (cali1 + cali2 + cali3) / 3;
    const promedioFormateado = promedio.toFixed(2);

    // Muestra el nombre del estudiante junto con su promedio final
    resultado.textContent = `El promedio de ${nombre} es: ${promedioFormateado} puntos`;
}


// 4. Comparación de dos valores

function compararValores() {
    // Obtiene los dos números ingresados por el usuario
    const num1Input = document.getElementById("comp1").value.trim();
    const num2Input = document.getElementById("comp2").value.trim();
    const resultado = document.getElementById("resultadoComparacion");

    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    // Valida que ambos campos contengan números válidos
    if (num1Input === "" || num2Input === "" || isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Por favor, ingresa dos números válidos para comparar.";
        return;
    }

    // Evalúa si son iguales o cuál es mayor y cuál es menor
    if (num1 === num2) {
        resultado.textContent = `Ambos números son iguales (${num1}) y su diferencia es 0.`;
        return;
    }

    const mayor = num1 > num2 ? num1 : num2;
    const menor = num1 < num2 ? num1 : num2;
    const diferencia = mayor - menor;
    const diferenciaFormateada = Number.isInteger(diferencia) ? diferencia : diferencia.toFixed(2);

    // Muestra mayor, menor y diferencia
    resultado.textContent = `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferenciaFormateada}.`;
}
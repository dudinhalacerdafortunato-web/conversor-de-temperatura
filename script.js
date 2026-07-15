function converter() {

    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const resultado = document.getElementById("resultado");
   
    resultado.innerHTML = "🔄 Convertendo temperatura...";

    if (isNaN(temperatura)) {
        resultado.innerHTML = "⚠️ Digite uma temperatura válida!";
        return;
    }

    if (origem === "kelvin" && temperatura < 0) {
    resultado.innerHTML = "⚠️ Kelvin não pode possuir valor negativo!";
    return;
}

    if (origem === destino) {
        resultado.innerHTML = `Resultado: ${temperatura.toFixed(2)}°`;
        return;
    }

    let valorFinal;

    // Celsius
    if (origem === "celsius" && destino === "fahrenheit") {
        valorFinal = (temperatura * 9/5) + 32;
        resultado.innerHTML = `${temperatura} °C = ${valorFinal.toFixed(2)} °F`;
    }

    else if (origem === "celsius" && destino === "kelvin") {
        valorFinal = temperatura + 273.15;
        resultado.innerHTML = `${temperatura} °C = ${valorFinal.toFixed(2)} K`;
    }

    // Fahrenheit
    else if (origem === "fahrenheit" && destino === "celsius") {
        valorFinal = (temperatura - 32) * 5/9;
        resultado.innerHTML = `${temperatura} °F = ${valorFinal.toFixed(2)} °C`;
    }

    else if (origem === "fahrenheit" && destino === "kelvin") {
        valorFinal = (temperatura - 32) * 5/9 + 273.15;
        resultado.innerHTML = `${temperatura} °F = ${valorFinal.toFixed(2)} K`;
    }

    // Kelvin
    else if (origem === "kelvin" && destino === "celsius") {
        valorFinal = temperatura - 273.15;
        resultado.innerHTML = `${temperatura} K = ${valorFinal.toFixed(2)} °C`;
    }

    else if (origem === "kelvin" && destino === "fahrenheit") {
        valorFinal = (temperatura - 273.15) * 9/5 + 32;
        resultado.innerHTML = `${temperatura} K = ${valorFinal.toFixed(2)} °F`;
    }

}

function limparCampos() {

    document.getElementById("temperatura").value = "";

    document.getElementById("origem").selectedIndex = 0;

    document.getElementById("destino").selectedIndex = 0;

    document.getElementById("resultado").innerHTML = "Resultado aparecerá aqui.";

}

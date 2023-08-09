function calcularTabuada() {
    //Essa função em JavaScript busca elementos HTML por seus IDs e armazena seus valores em variáveis. Vamos analisar cada linha separadamente:
    var numeroInput = document.getElementById("numero");
    var tabuadaSelect = document.getElementById("tabuadaSelect");
    var numero = parseInt(numeroInput.value);

    //Essa função verifica se o valor fornecido, chamado de "numero", não é um número (NaN) ou se é menor que zero. 

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro não negativo.");
        return;
    }
    //Essa função tem como objetivo preencher um elemento <select> com a tabuada de um número específico. 
           
    tabuadaSelect.innerHTML = ""; // Limpa o select antes de adicionar as opções

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        var option = document.createElement("option");
        option.text = numero + " x " + i + " = " + resultado;
        tabuadaSelect.add(option);
    }
}

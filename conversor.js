document.getElementById("converter").addEventListener("click", function () {
    const valorMetros = parseFloat(document.getElementById("valorMetros").value);
    const opcao = document.getElementById("opcao").value;

    if (isNaN(valorMetros) || valorMetros <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor válido em metros.";
        return;
    }

    let resultado;

    switch (opcao) {
        case "1":
            resultado = `${valorMetros * 1000} milímetros (mm)`;
            break;
        case "2":
            resultado = `${valorMetros * 100} centímetros (cm)`;
            break;
        case "3":
            resultado = `${valorMetros * 10} decímetros (dm)`;
            break;
        case "4":
            resultado = `${valorMetros / 10} decâmetros (dam)`;
            break;
        case "5":
            resultado = `${valorMetros / 100} hectômetros (hm)`;
            break;
        case "6":
            resultado = `${valorMetros / 1000} quilômetros (km)`;
            break;
        default:
            resultado = "Opção inválida. Por favor, escolha uma unidade.";
            break;
    }

    document.getElementById("resultado").innerText = `O valor convertido é: ${resultado}`;
});

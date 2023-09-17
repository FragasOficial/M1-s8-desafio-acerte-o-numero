function gerarNumeroAleatorio(){
    return Math.floor(Math.random()*20) + 1;
}

function verificarPalpite(numeroAleatorio, palpiteUsuario){
    let tentativa = 1;

    while (palpiteUsuario !== numeroAleatorio){
        alert("Tente novamente");
        palpiteUsuario = parent(prompt("Digite seu palpite (um número inteiro positivo):"));
        
        if(isNaN(palpiteUsuario) || palpiteUsuario <= 0){
            alert("Por favor, digite um número inteiro positivo válido!");
            continue;
        }
        tentativa++;
    }
    
    alert('Você acertou na tentativa ${tentativa}. O número era ${numeroAleatorio}.');
}

const numeroAleatorio = gerarNumeroAleatorio();
let palpiteUsuario = parseInt(prompt("Digite seu palpite (um número inteiro positivo):"));

if (isNaN(palpiteUsuario) || palpiteUsuario <= 0){
    alert("Por favor, digite um número inteiro positivo válido.")
} else {
    verificarPalpite(numeroAleatorio, palpiteUsuario);
}

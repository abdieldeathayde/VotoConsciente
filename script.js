function votar(){
    idade = document.getElementById("idade").value;
    menor = document.getElementById("res");
    if (idade < 16) {
        menor.innerHTML = "Você não pode votar!";
    } else {
        if (idade >= 18 && idade <= 70) {
            menor.innerHTML = "Você pode votar!";
        } else {
            menor.innerHTML = "Você não é obrigado a votar!";
        }
    }

}
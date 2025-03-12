function votar(){
    idade = document.getElementById("idade").value;
    resultado = document.getElementById("res");
    imagem = document.getElementById("img");
    if (idade < 16) {
        resultado.innerHTML = "Você não pode votar!";
        
        imagem.src = "img/menorDeIdade.jpeg";
        imagemMenor.style.width = "200px";
    }else if (idade >= 16 && idade < 18) {
        resultado.innerHTML = "Você pode votar, mas não é obrigado!";
        imagem.src = "img/adulto.jpeg";
    } else {
        if (idade >= 18 && idade <= 70) {
            resultado.innerHTML = "Você pode votar!";
            imagem.src = "img/adulto.jpeg";
        } else {
            resultado.innerHTML = "Você não é obrigado a votar!";
            imagem.src = "img/idoso.jpeg";
        }
    }


}
document.addEventListener("DOMContentLoaded", function () {
    // Criando o botão 
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Modo Claro";
    toggleButton.classList.add("toggle-button");

    // Estilizando o botão
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px 15px";
    toggleButton.style.backgroundColor = "#FFC107";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.fontWeight = "bold";
    toggleButton.style.transition = "background-color 0.3s ease-in-out";

    document.body.appendChild(toggleButton);

    // Pegando elementos necessários
    const body = document.body;
    const image = document.getElementById("image-mode");

    // Alternância de modo
    toggleButton.addEventListener("click", function () {
       
        // Verifica se o modo claro está ativado e alterna as cores
        if (body.style.backgroundColor === "rgb(18, 18, 18)" || body.style.backgroundColor === "") {
            
            // Ativar modo claro
            body.style.backgroundColor = "#F6F6F6";
            body.style.color = "black";
            toggleButton.style.backgroundColor = "#343A40";
            toggleButton.style.color = "white";
            
            toggleButton.innerText = "Modo Escuro";
        } else {
            
            // Voltar ao modo escuro
            body.style.backgroundColor = "#121212";
            body.style.color = "white";
            toggleButton.style.backgroundColor = "#FFC107";
            toggleButton.style.color = "black";
            image.style.filter = "brightness(1)";
            toggleButton.innerText = "Modo Claro";
        }
    });
});

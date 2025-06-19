function adicionarComida() {
    const form = document.getElementById("formComida");
    const nome = form.nome.value.trim();
    const select = form.comida;
    const comida = select.value;

    if (nome && comida) {
        // Adiciona a informação na lista
        const lista = document.getElementById("listaComidas");
        const item = document.createElement("li");
        item.textContent = `${nome} vai levar ${comida}`;
        lista.appendChild(item);

        // Remove a opção do select
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === comida) {
                select.remove(i);
                break;
            }
        }

        form.reset();
    } else {
        alert("Por favor, preencha seu nome e escolha uma comida!");
    }
}
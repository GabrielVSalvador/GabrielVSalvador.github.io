document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("menuLateral").classList.toggle("aberto");
    document.querySelector(".container").classList.toggle("deslocado");
    document.querySelector("footer").classList.toggle("deslocado");
});

document.getElementById("temaCheck").addEventListener("change", function() {
    document.body.classList.toggle("tema-claro");
});

    function filtrarProjetos(tag) {
            let cards = document.querySelectorAll(".projeto-card");
    cards.forEach(card => {
        let tags = card.getAttribute("data-tags").split(" ");
        card.setAttribute("data-tags", tags.join(" "));
    });
        cards.forEach(card => {
            let tags = card.getAttribute("data-tags").split(" ");
            if (tag === "todos" || tags.includes(tag)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        // Atualiza a classe 'ativo' nos botões de filtro
        let filtros = document.querySelectorAll(".filtro");
        filtros.forEach(filtro => {
            if (filtro.textContent === tag || (tag === "todos" && filtro.textContent === "Todos")) {
                filtro.classList.add("ativo");
            } else {
                filtro.classList.remove("ativo");
            }
        });
    }
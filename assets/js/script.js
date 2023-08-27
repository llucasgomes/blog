import { postsDB } from "../data/posts.js";
import { usersDB } from "../data/users.js";
import { templateCard } from "./functions.js";

let posts = JSON.parse(localStorage.getItem("posts"));
let users = [];

//verifica se tem ou nao um storage

if (posts == null) {
  localStorage.setItem("posts", JSON.stringify(postsDB));
  localStorage.setItem("users", JSON.stringify(usersDB));

  posts = JSON.parse(localStorage.getItem("posts"));
  users = JSON.parse(localStorage.getItem("users"));
}

// ============= Add os cards dinamicamente apartir do banco de dados =============================
const tabela = document.getElementById("grid-cards");

posts.map((item) => {
  const li = document.createElement("li");
  li.innerHTML = templateCard(item);
  tabela.appendChild(li);
});

/* ======================FILTROS ==================================== */

const cardsAll = document.querySelectorAll(".card");
const buttonFilters = document.querySelectorAll(".button");

//================== Verificar em qual card foi clicado e direcionar o mesmo para seu post enviando um ID
cardsAll.forEach((card, index) => {
  card.addEventListener("click", () => {
    localStorage.setItem("selected", index + 1);
    window.location.href = "/description.html";
  });
});

//================== Filtro de Cards ========================
buttonFilters.forEach((button, index, node) => {
  button.addEventListener("click", () => {
    let categoria = node[index].innerText;

    cardsAll.forEach((card) => {
      if (!card.classList.contains("hide")) card.classList.add("hide");

      if (categoria === "All" || card.classList.contains(categoria))
        card.classList.remove("hide");
    });
  });
});

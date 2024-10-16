const form_input = document.getElementsByTagName("form")[0];

form_input.addEventListener("submit", function (e) {
  e.preventDefault();

  const task_text = document.getElementById("task_text").value;

  const task_section = document.getElementById("task_section");

  const card = document.createElement("div");

  card.classList.add("contact-card");

  card.innerHTML = `<p>${task_text}</p>
  
    <button type = 'button' onclick = 'completa_task(event)'>Completata</button>
  
    <button type = 'button' onclick = 'delete_task(event)'>Cancella Task</button>`;

  task_section.appendChild(card);

  form_input.reset();
});

const completa_task = function (evento) {
  const taskText = evento.target.parentElement.querySelector("p");

  taskText.style.textDecoration = "line-through";
};

const delete_task = function (evento) {
  const card = evento.target.parentElement;

  card.remove();
};

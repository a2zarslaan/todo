const addForm = document.querySelector(".add");

const list = document.querySelector(".todos");

const search = document.querySelector(".search input");

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
  return html;
};

// add todos
addForm.addEventListener("submit", event => {
  event.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length > 0) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos
list.addEventListener("click", event => {
  if (event.target.classList.contains("delete")) {
    // this is very important. It tells us how to select an element that was clicked and perform action on it.
    event.target.parentElement.remove(); //very important, this tells us how to access the parent elements.
  }
});

const filterTodos = term => {
  Array.from(list.children)
    .filter(todo => {
      return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach(todo => {
      todo.classList.add("filtered");
    });

  Array.from(list.children)
    .filter(todo => {
      return todo.textContent.toLowerCase().includes(term);
    })
    .forEach(todo => {
      todo.classList.remove("filtered");
    });
};

// keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

function onReady(){
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListner('submit', (event) => {
    event.preventDefault ();

    let title = NEW_TODO_TEXT.value;

    let newLi = document.createElement('li'); //<li></li>
    let checkbox = document.createElement('element');
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    TODO_LIST.removeChild(this.parentElement);
  })

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";

  });
};

window.onload = function() {
  onReady();

};

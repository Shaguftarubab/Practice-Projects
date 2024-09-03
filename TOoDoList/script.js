const inputBox = document.querySelector('#inputBox');
const addBtn = document.querySelector('#addBtn');
const toDoList = document.querySelector('.list');
let toDos = [];
let editToDo;

const getValueFromInput = () => {
    let val = inputBox.value;
    return val;
}

const createListItem = (text) => {
    const listItem = document.createElement("li");
    listItem.innerText = text;
    return listItem;
}

const resetInputbox = () => {
    inputBox.value = "";
}

const createDeleteBtn = (index) => {
    const delBtn = document.createElement("button");
    delBtn.classList.add("deleteBtn");
    delBtn.innerText = "Delete";
    delBtn.onclick = () => {
      toDos.splice(index, 1);
      const listItem = toDoList.querySelector(`li:nth-child(${index + 1})`);
      listItem.remove();
    };
    return delBtn;
  };
  
const createEditBtn = (currentTodo) => {
   
    const edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.onclick = () => {
        inputBox.focus();
        inputBox.value = currentTodo.text;
        addBtn.value = "Save";
        editToDo = currentTodo;
    }
    edit.classList.add("editBtn");
    return edit;
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const todo = {
        text: getValueFromInput(),
        id: Date.now()
    }

    if (addBtn.value === "Save") {
        editToDo.text = getValueFromInput();
        console.log("Save");
        const index = toDos.indexOf(editToDo);
        toDos[index] = editToDo;//update array 
        const listItem = toDoList.querySelector(`li:nth-child(${index + 1})`);
        listItem.childNodes[0].textContent = editToDo.text;//update list text
        addBtn.value = "Add";
        resetInputbox();
    } else {
        toDos.push(todo);
        const listItem = createListItem(todo.text);
        toDoList.appendChild(listItem);
        console.log("Add"); 
    const index = toDos.indexOf(todo);
    const editBtn = createEditBtn(todo);
    const deleteBtn = createDeleteBtn(index);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    resetInputbox();
        
    }

})
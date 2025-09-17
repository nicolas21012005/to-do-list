const form = document.getElementById('form');
const cont_global = document.getElementById('main-container');
const completedItems = document.getElementById('cont-items-completed');
const toDoList = document.getElementById('cont-to-do-list');
const addBtn = document.getElementById('button_form');
const input = document.getElementById('to_do_input');


// creamos la funcion que nos permita crear una nueva tarea a partir del formulario
// toda etiqueta que vamos a crear es a partir de la maqueta html pre existente
function createToDoItem(itemText) {
    // creamos el nodo, elemento padre o contenedor 
    const itemToDo = document.createElement('div');
    itemToDo.classList.add('item');
    // creamos el nodo hijo del input y le agregamos el type checkbox que es el que necesitamos en este caso
    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = 'checkbox';
    // creamos el siguiente nodo hijo párrafo
    const p = document.createElement('p')
    // a este parrafo le asigno el valor del argumento de la funcion, es decir lo que escribe el usuario en el input
    p.textContent = itemText;
    // creamos el ultimo nodo hijo, el botón de eliminar
    const buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    // ensamblamos dentro del nodo padre sus nodos hijos ya previamente creados, es decir la estructura de cada tarea(item)
    itemToDo.appendChild(inputCheckbox);
    itemToDo.appendChild(p);
    itemToDo.appendChild(buttonDelete);
    // utilizamos el return para dar respuesta del elemento creado para tener la posibilidad de usarlo más adelante cuando se necesites
    return itemToDo;
}

addBtn.addEventListener('click', createToDoItem)

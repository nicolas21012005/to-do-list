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
    buttonDelete.classList.add('button_delete')
    buttonDelete.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    // ensamblamos dentro del nodo padre sus nodos hijos ya previamente creados, es decir la estructura de cada tarea(item)
    itemToDo.appendChild(inputCheckbox);
    itemToDo.appendChild(p);
    itemToDo.appendChild(buttonDelete);
    // utilizamos el return para dar respuesta del elemento creado para tener la posibilidad de usarlo más adelante cuando se necesites
    return itemToDo;
}

addBtn.addEventListener('click', () => {
    const itemText = input.value.trim()
    if (itemText == '') {
        alert('No se puede crear una tarea vacia estúpido, intente nuevamente sapo')
    } else {
        const newItem = createToDoItem(itemText);
        toDoList.appendChild(newItem)
        eventsToItem(newItem)
        input.value = '';
    }
});

// la siguiente funcion nos permitirá agregar el funcionamiento principal sobre las tareas, es decir marcar la tarea como completada o eliminarla
function eventsToItem(itemToDo) {
    // usamos querySelector para capturar el input o button que estan dentro del item, capturamos uno que es el checkbox y el otro que es el boton de eliminar
    const checkbox = itemToDo.querySelector('input');
    const btnDelete = itemToDo.querySelector('.button_delete');

    // marcar como completada la tarea
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            completedItems.appendChild(itemToDo)
        } else {
            toDoList.appendChild(itemToDo)
        }
    })
    btnDelete.addEventListener('click', () => {
        itemToDo.remove()
    })
}
const btnTheme = document.getElementById('change-theme');
btnTheme.addEventListener('click', () => {
    const cssDay = document.getElementById('link-styles');
    if (cssDay.getAttribute('href') === 'css/styles.css') {
        cssDay.setAttribute('href', 'css/styles_dia.css')
        btnTheme.textContent = 'Modo noche'
    } else {

        cssDay.setAttribute('href', 'css/styles.css')
        btnTheme.textContent = 'Modo dia'

    }
})

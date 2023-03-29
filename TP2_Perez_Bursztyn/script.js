let inputTarea = document.getElementById("tareas");
let btnAgregarTarea = document.getElementById("botonAgregar")
let ulListado = document.getElementById("lista")
let tareasAgregadas = [
        "Hacer matemática",
        "Leer Lengua",
        "Hacer Efsi",
];
const mostrarListado = () => {
    ulListado.innerHTML = ""; //borra los elementos de la lista
    tareasAgregadas.forEach(item => {
    let li = document.createElement("li");
    li.onclick = (e) => {
        e.target.style.textDecoration = "line-through";
    }
    li.innerHTML = item; //agrega los elementos al html, en la lista
    ulListado.appendChild(li); //agrega un elemento html a otro
})
}

mostrarListado();

btnAgregarTarea.onclick = () => {
    if (inputTarea.value.length) {
        inputTarea.style.border = "1px solid black";
        tareasAgregadas.push(inputTarea.value)
        mostrarListado();

        inputTarea.value = "";
    }else{
        alert("Ingresa una tarea valida")
        inputTarea.style.border = "1px solid red";
    }
}




/*let lista = [
    {
        texto: "Hacer matemática",
        fechaYHoraCreado: Date.now(),
        fechaYHoraTachado: Date.now(),
    },
    {
        texto: "Hacer Efsi",
        fechaYHoraCreado: Date.now(),
        fechaYHoraTachado: Date.now(),
    },
    {
        texto: "Leer Lengua",
        fechaYHoraCreado: Date.now(),
        fechaYHoraTachado: Date.now(),
    }
]

console.log(lista);

let btnAgregarTarea = document.getElementById("botonAgregar");

function agregarTarea(){
    let textoAgregado = document.getElementById('accion').value;
    lista.texto.push(textoAgregado);
    mostrarLista();
    document.getElementById('accion').value = "";
}


btnAgregarTarea.onclick = function agregarTarea(){
    let textoAgregado = document.getElementById('accion').value;
    lista.texto.push(textoAgregado);
    mostrarLista();
    document.getElementById('accion').value = "";
   
}
  
console.log(lista);

let verLista = document.getElementById("lista")*/
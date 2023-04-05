let inputTarea = document.getElementById("tareas");
let btnAgregarTarea = document.getElementById("botonAgregar");
let btnMasRapido = document.getElementById("botonMasRapido");
let ulListado = document.getElementById("lista");
let listaTachados = [];
let tareasAgregadas = [
    {
        texto: "Hacer matemática",
        hecho: false,
        fechaYHoraTachado: null,
    },
    {
        texto: "Hacer Efsi",
        hecho: false,
        fechaYHoraTachado: null,
    },
    {
        texto: "Leer Lengua",
        hecho: false,
        fechaYHoraTachado: null,
    }

];


const mostrarListado = () => {
    ulListado.innerHTML = ""; //borra los elementos de la lista
    tareasAgregadas.forEach(item => {
        let li = document.createElement("li");
        li.onclick = (e) => {
            if (li.style.textDecoration != "line-through") {
                if (item.hecho === true) return;
                li.style.textDecoration = "line-through";
                item.hecho = true;
                item.fechaYHoraTachado = (new Date()).toLocaleDateString('en-US');
                listaTachados.push(item);
                console.log(listaTachados);


            } else {
                li.style.textDecoration = "none";
                item.hecho = false;
                item.fechaYHoraTachado = null;
            }
        }
        if (item.hecho == true) {
            li.style.textDecoration = "line-through";
            li.innerHTML = `
                <input type="checkbox" checked name="" id="check"/> ${item.texto}
            `
        } else {
            li.style.textDecoration = "none";
            li.innerHTML = `
                <input type="checkbox" name="" id="check"/> ${item.texto}
            `
        }


        //<input type="checkbox" onchange="CambiarEstado()" name="" id="check">' + item.texto + ' ' + item.fechaYHoraCreado; //agrega los elementos al html, en la lista
        ulListado.appendChild(li); //agrega un elemento html a otro
    })
}

mostrarListado();

btnAgregarTarea.onclick = () => {
    if (inputTarea.value.length) {
        inputTarea.style.border = "1px solid black";
        tareasAgregadas.push({ texto: inputTarea.value, hecho: false, fechaYHoraCreado: (new Date()).toLocaleDateString('en-US'), fechaYHoraTachado: null });
        mostrarListado();

        inputTarea.value = "";
    } else {
        alert("Ingresa una tarea valida")
        inputTarea.style.border = "1px solid red";
    }
}

btnMasRapido.onclick = () => {
    for (let i = 0; i < listaTachados.length; i++) {
        if (listaTachados[i].hecho === true) {
            alert("La tarea hecha en menor tiempo es " + listaTachados[i].texto);
        }
    }
    return -1;

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
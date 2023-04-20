let inputTarea = document.getElementById("tareas");
let btnAgregarTarea = document.getElementById("botonAgregar");
let btnMasRapido = document.getElementById("botonMasRapido");
let ulListado = document.getElementById("lista");
let listaTachados = [];
let tareasAgregadas = [
    {
        texto: "Hacer matemática",
        hecho: false,
        fechaYHoraCreado: new Date(),
        fechaYHoraTachado: null,
    },
    {
        texto: "Hacer Efsi",
        hecho: false,
        fechaYHoraCreado: new Date(),
        fechaYHoraTachado: null,
    },
    {
        texto: "Leer Lengua",
        hecho: false,
        fechaYHoraCreado: new Date(),
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
                item.fechaYHoraTachado = new Date();
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
        tareasAgregadas.push({ texto: inputTarea.value, hecho: false, fechaYHoraCreado: new Date(), fechaYHoraTachado: null });
        mostrarListado();

        inputTarea.value = "";
    } else {
        alert("Ingresa una tarea valida")
        inputTarea.style.border = "1px solid red";
    }
}

btnMasRapido.onclick = () => {

    const listaTachados = tareasAgregadas.filter(tarea => tarea.hecho === true);
    console.log(listaTachados);
    let elMasRapido = listaTachados[0];
    console.log(elMasRapido);
    let elTiempoMasRapido = elMasRapido.fechaYHoraTachado - elMasRapido.fechaYHoraCreado;

    listaTachados.forEach(todo =>{

        if((todo.fechaYHoraTachado - todo.fechaYHoraCreado) < elTiempoMasRapido ) 
        {
            elTiempoMasRapido = todo.fechaYHoraTachado - todo.fechaYHoraCreado;
            elMasRapido = todo;
        }
        
    });
    
    alert("La tarea hecha en menor tiempo es " + elMasRapido.texto);
}
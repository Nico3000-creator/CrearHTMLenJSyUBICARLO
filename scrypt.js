// Creamos elementos en html mediante JS (arbol)
// Primer parrafo
const parrafo1 = document.createElement(/*CODIGOS HTML ACA*/"p");
//Agregamos un Categoria
parrafo1.textContent = "Deportes";
//Agregamos dos class a ese parrafo
parrafo1.classList.add("Categoria");
parrafo1.classList.add("Paseo");
console.log(parrafo1);
// esto se agrega en la consola pero todavia no lo muestra, es puro JS

// otro metodo de modificar
const titulo = "Experimenta lo mejor del deporte";

// Segundo parrafo
const parrafo2 = document.createElement(/*CODIGOS HTML ACA*/"p");
// Agregamos un titulo a esa categoria
parrafo2.textContent = titulo;
// Agregamos un class a ese parrafo
parrafo2.classList.add("titulo");

// Tercer parrafo
const parrafo3 = document.createElement("p");
parrafo3.textContent = "$2500 mensuales";
parrafo3.classList.add ("precio");

// cuando armamos los nodos es de abajo para arriba
// a continuacion armamos el nodo PADRE para los hijos que armamos anteriormnete

// Creamos el NODO PADRE con un div
const info = document.createElement("div");
// Le asignamos una clase y los nodos hijos
info.classList.add("info");
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Creamos la imagen
const img = document.createElement("img");
img.src = "insertar la imagen aca"

// Creamos el div contenedor CARD para importar lo que escribimos
const contenedorCard = document.createElement("div");
// creamos la clase
contenedorCard.classList.add("card")

// Vamos a asignar la img al card
contenedorCard.appendChild(img);

// Vamos a agregar la info
contenedorCard.appendChild(info);

// Ahora buscamos donde agregamos esto al html

// Seleccionamos el contenedor FINAL con el query selector (dos formas):
// primera forma: copiando el selector JS desde la web:
const contenedor1 = document.querySelector("SELECTOR COPIADO ACA");
// segunda forma: visualisando e indicando las clases que se ven con .(aca la clase)
const contenedor2 = document.querySelector(".ACA LA CLASE VISUALISADA");

// Agregamos el nuevo contenedor armado en JS
contenedor1.appendChild(contenedorCard);

// ESTE NODO ARMADO SE AGREGA AL FINAL POR DETERMINADO
// PARA INSERTAR UN NODO PREVIO A OTRO EXISTENTE SE USA EL COMANDO Node.insertBefore()
// lo usamos como ejemplo:
contenedor1.insertBefore("ACA CONTENEDOR VIEJO", "ACA CONTENEDOR NUEVO");

// TODO ESTE PROCESO ES UNA CREACION DE HTML DENTRO DE JS AUN NO VISIBLE




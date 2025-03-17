// Array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('nombreAmigo');
    if (!input) {
        alert("Campo de entrada no encontrado.");
        return;
    }
    const nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Mostrar la lista actualizada de amigos
    mostrarAmigos();

    // Limpiar el campo de entrada
    input.value = "";
}

function mostrarAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    if (!listaAmigos) {
        alert("Lista de amigos no encontrada.");
        return;
    }

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultadoSorteo');
    if (!resultado) {
        alert("Elemento para mostrar el resultado no encontrado.");
        return;
    }
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
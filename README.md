

Proyecto: Lista de Amigos y Sorteo
Descripción del Proyecto
Este proyecto implementa una aplicación web que permite a los usuarios gestionar una lista de amigos. Los usuarios pueden añadir nombres a la lista, visualizarla dinámicamente y realizar un sorteo aleatorio para seleccionar a uno de los amigos. Es ideal para situaciones donde quieras sortear turnos, premios o simplemente decidir quién paga la cuenta.

Funcionalidades Principales
Agregar Amigos: Captura nombres ingresados por el usuario y los añade a una lista interactiva.

Visualizar Lista: Muestra en tiempo real los amigos agregados en un elemento de lista.

Sortear un Amigo: Selecciona aleatoriamente a un amigo de la lista y muestra el nombre en la página.

Estructura del Proyecto
HTML
El archivo HTML define la estructura básica de la aplicación, que incluye:

Un campo de entrada de texto para ingresar nombres.

Botones para agregar amigos y realizar el sorteo.

Un elemento de lista (ul) para mostrar los nombres.

Un párrafo para mostrar el resultado del sorteo.

JavaScript
El archivo JavaScript (app.js) contiene tres funciones principales que hacen que la aplicación sea interactiva:

agregarAmigo: Valida y añade nombres al arreglo amigos, actualizando dinámicamente la lista visible en la página.

mostrarAmigos: Refresca la lista en el DOM mostrando el contenido del arreglo amigos.

sortearAmigo: Selecciona de forma aleatoria un nombre del arreglo y lo muestra como el resultado del sorteo.

Cómo Usar Este Proyecto
Clonar el Repositorio: Copia o descarga los archivos del proyecto en tu computadora.

Abrir el Archivo HTML: Ejecuta el archivo index.html en tu navegador preferido.

Interacción:

Ingresa el nombre de un amigo en el campo de texto.

Haz clic en "Agregar Amigo" para añadirlo a la lista.

Haz clic en "Sortear Amigo" para seleccionar un nombre aleatorio.

Archivos Clave
index.html: Contiene la estructura básica de la página.

app.js: Implementa la lógica interactiva.

Tecnologías Utilizadas
HTML5: Estructura y elementos de la interfaz de usuario.

JavaScript: Lógica y comportamiento dinámico del proyecto.

CSS (opcional): Puedes estilizar la página para hacerla más atractiva.

Futuras Mejores
Agregar validación avanzada para evitar nombres duplicados.

Incorporar estilos personalizados utilizando CSS.

Permitir la edición o eliminación de nombres en la lista.

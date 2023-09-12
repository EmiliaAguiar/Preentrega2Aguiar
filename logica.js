console.table(productos);

/* Mensaje de bienvenida utilizando date y math */

let hoy = new Date().getDay();
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

let numeroAzar = Math.round(Math.random() * (productos.length - 1) + 1);
let productoAzar = productos[numeroAzar];
alert(`¡Semana de mega descuentos!🚀\n\n⚡️ Sólo por hoy ${dias[hoy - 1]}⚡️\n${productoAzar.nombre} ... $ ${productoAzar.precio}\n¡No te pierdas esta promo increíble!`);


/* Orden de productos por precio ascendente */

productos.sort((a, b) => a.precio - b.precio);
console.table(productos);

/* Filtrar por clase de producto */

function filtrarClaseDeProducto(claseProducto) {
    const filtrados = productos.filter((producto) => producto.nombre.toLowerCase().includes(claseProducto.toLowerCase()));

    if (filtrados.length != 0) {
        let textoParaAlert = '';
        filtrados.forEach((producto) => {
            textoParaAlert += `🥳 ${producto.nombre}- 💵 Precio $ ${producto.precio}\n`;
        });
        alert(textoParaAlert);
    } else {
        alert('Lamentablemente no tenemos productos con esas características en oferta');
    }
}

/* Dato de entrada - Clase de producto */

let claseProducto = prompt('👉🏼Ingresa qué tipo de producto estás buscando:\nFLUO o LED \nEscribe 0 para salir del programa');

while (claseProducto !== '0') {
    if (claseProducto.toLowerCase() === 'led' || claseProducto.toLowerCase() === 'fluo') {
        filtrarClaseDeProducto(claseProducto.toLowerCase());
    } else {
        alert('❌No tenemos ningún producto con esas características en oferta❌\n\nPor favor, ingrese LED o FLUO.');
    }

    claseProducto = prompt('Ingresa qué tipo de producto estás buscando: FLUO o LED \n\n Escribe 0 para salir del programa');
}



function encontrarProductoPorNombre(nombreProducto) {
    const productoEncontrado = productos.find((producto) =>
        producto.nombre.toLowerCase().includes(nombreProducto.toLowerCase())
    );

    if (productoEncontrado) {
        alert(`Producto encontrado: ${productoEncontrado.nombre} - Precio: $${productoEncontrado.precio}`);
    } else {
        alert(`No se encontró ningún producto con el nombre ${nombreProducto}`);
    }
}

let nombreProducto = prompt('👉🏼Ingresa el nombre del producto que estás buscando:\n(Escribe 0 para salir del programa)');

while (nombreProducto !== '0') {
    encontrarProductoPorNombre(nombreProducto);
    nombreProducto = prompt('👉🏼Ingresa el nombre del producto que estás buscando:\n(Escribe 0 para salir del programa)');
}

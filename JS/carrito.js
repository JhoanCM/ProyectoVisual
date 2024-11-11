
let carrito = [];
let productos = [
    { id: 1, nombre: 'Faro LED', precio: 50000, descripcion: 'Faro LED de alta intensidad' },
    { id: 2, nombre: 'Asiento Deportivo', precio: 200000, descripcion: 'Asiento deportivo ajustable' },
    { id: 3, nombre: 'Frenos de Disco', precio: 150000, descripcion: 'Frenos de disco de alta calidad' },
    
];


function agregarAlCarrito(idProducto, cantidad) {
    const producto = productos.find(prod => prod.id === idProducto);
    if (producto) {
        const productoEnCarrito = carrito.find(item => item.id === idProducto);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += cantidad;
        } else {
            carrito.push({ ...producto, cantidad });
        }
        actualizarCarrito();
    }
}


function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarCarrito();
}


function actualizarCarrito() {
    const productosCarrito = document.getElementById('productosCarrito');
    productosCarrito.innerHTML = ''; 

    let totalCompra = 0;
    carrito.forEach(item => {
        const totalItem = item.precio * item.cantidad;
        totalCompra += totalItem;
        productosCarrito.innerHTML += `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.cantidad}</td>
                <td>$${item.precio}</td>
                <td>$${totalItem}</td>
                <td><button onclick="eliminarDelCarrito(${item.id})">Eliminar</button></td>
            </tr>
        `;
    });

    
    document.getElementById('totalProductos').textContent = carrito.length;
    document.getElementById('totalCompra').textContent = totalCompra;
    
   
    const costoEnvio = 15000;
    const totalConEnvio = totalCompra + costoEnvio;
    document.getElementById('envio').textContent = costoEnvio;
    document.getElementById('totalConEnvio').textContent = totalConEnvio;
}


function validarTarjeta(event) {
    event.preventDefault();

    const numeroTarjeta = document.getElementById('numeroTarjeta').value;
    const fechaExpiracion = document.getElementById('fechaExpiracion').value;
    const codigoSeguridad = document.getElementById('codigoSeguridad').value;
    const nombreTitular = document.getElementById('nombreTitular').value;
    const paisEmision = document.getElementById('paisEmision').value;
    const tipoTarjeta = document.getElementById('tipoTarjeta').value;

    if (!numeroTarjeta || !fechaExpiracion || !codigoSeguridad || !nombreTitular || !paisEmision || !tipoTarjeta) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    
    if (numeroTarjeta.length !== 19) { 
        alert('Número de tarjeta inválido.');
        return;
    }

   
    const [mes, anio] = fechaExpiracion.split('/');
    const fechaActual = new Date();
    const fechaExpiracionDate = new Date(`20${anio}-${mes}-01`);
    if (fechaExpiracionDate < fechaActual) {
        alert('La tarjeta está expirada.');
        return;
    }

   
    if (codigoSeguridad.length !== 3) {
        alert('Código de seguridad inválido.');
        return;
    }

   
    if (carrito.length > 20) {
        alert('No puedes agregar más de 20 productos al carrito.');
        return;
    }

  
    const totalCompra = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    const presupuestoMaximo = 500000;
    if (totalCompra > presupuestoMaximo) {
        alert('El total de la compra supera el presupuesto máximo.');
        return;
    }

 
    alert('Compra realizada con éxito.');
    carrito = []; 
    actualizarCarrito(); 
    document.getElementById('formTarjeta').reset(); 
    document.getElementById('confirmarCompra').disabled = true; 
}


function verCodigo() {
    const codigoSeguridad = document.getElementById('codigoSeguridad');
    if (codigoSeguridad.type === "password") {
        codigoSeguridad.type = "text";
    } else {
        codigoSeguridad.type = "password";
    }
}


document.getElementById('formTarjeta').addEventListener('submit', validarTarjeta);
document.getElementById('cancelarCompra').addEventListener('click', () => {
    window.location.href = '/'; 
});
document.getElementById('regresarProductos').addEventListener('click', () => {
    window.location.href = '/productos'; 
});


agregarAlCarrito(1, 2); 
agregarAlCarrito(2, 1); 
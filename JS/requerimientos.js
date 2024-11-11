

const form = document.getElementById('requerimientosForm');
const mensajeError = document.getElementById('mensajeError');
const mensajeExito = document.getElementById('mensajeExito');


function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const presupuesto = document.getElementById('presupuesto').value.trim();
    const cantidadProductos = document.getElementById('cantidadProductos').value.trim(); // Corregido el ID aquí
    const direccion = document.getElementById('direccion').value.trim();
    const domicilio = document.getElementById('domicilio').checked;
    const recogerEnTienda = document.getElementById('recogerTienda').checked;

    
    mensajeError.style.display = 'none';

 
    if (!nombre || !presupuesto || !cantidadProductos || !direccion) {
        mensajeError.style.display = 'block';
        mensajeError.innerHTML = 'Todos los campos son obligatorios.';
        return false;
    }

  
    if (nombre.length > 20) {
        mensajeError.style.display = 'block';
        mensajeError.innerHTML = 'El nombre no puede superar los 20 caracteres.';
        return false;
    }

    
    const presupuestoNumero = parseFloat(presupuesto.replace(/[^0-9.-]+/g, ""));
    if (isNaN(presupuestoNumero) || presupuestoNumero <= 0) {
        mensajeError.style.display = 'block';
        mensajeError.innerHTML = 'El presupuesto debe ser un número positivo y estar formateado en pesos.';
        return false;
    }

   
    const cantidadProductosNumero = parseInt(cantidadProductos);
    if (isNaN(cantidadProductosNumero) || cantidadProductosNumero <= 0 || cantidadProductosNumero > 20) {
        mensajeError.style.display = 'block';
        mensajeError.innerHTML = 'La cantidad de productos debe ser un número positivo y no puede ser superior a 20.';
        return false;
    }

    
    if (!domicilio && !recogerEnTienda) {
        mensajeError.style.display = 'block';
        mensajeError.innerHTML = 'Debes seleccionar un método de envío.';
        return false;
    }

    
    const datos = {
        nombre,
        presupuesto,
        cantidadProductos,
        direccion,
        domicilio,
        recogerEnTienda
    };
    localStorage.setItem('requerimiento', JSON.stringify(datos));

    return datos;
}


function mostrarMensajeExito() {
    const requerimiento = JSON.parse(localStorage.getItem('requerimiento'));
    let mensaje;

    if (requerimiento.recogerEnTienda) {
        mensaje = '¡Enhorabuena! Tus productos serán entregados en nuestras sucursales; visita tu sucursal más cercana.';
    } else {
        mensaje = 'Listo, ahora puedes recibir tus productos en casa; a continuación selecciona tus productos.';
    }

   
    const mensajeCompleto = `
        ${mensaje}
        <br><br>
        Información del cliente:<br>
        Nombre: ${requerimiento.nombre}<br>
        Presupuesto: ${requerimiento.presupuesto}<br>
        Cantidad de Productos: ${requerimiento.cantidadProductos}<br>
        Dirección: ${requerimiento.direccion}<br>
        Método de Envío: ${requerimiento.domicilio ? 'Envío a domicilio' : 'Recoger en tienda'}<br>
        <a href="index.html" class="btn">Volver al inicio</a>
    `;

   
    const mensajeDiv = document.getElementById('mensajeExito');
    mensajeDiv.innerHTML = mensajeCompleto;
    mensajeDiv.style.display = 'block';

   
    window.location.href = "index.html"; 
}


function limpiarFormulario() {
    document.getElementById('requerimientosForm').reset();
    document.getElementById('mensajeExito').style.display = 'none';
    document.getElementById('mensajeError').style.display = 'none';
    localStorage.removeItem('requerimiento');
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const validacion = validarFormulario();
    if (validacion) {
        mostrarMensajeExito(); 
    }
});


document.querySelector('button[type="button"]').addEventListener('click', limpiarFormulario);
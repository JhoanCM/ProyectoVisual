const productsPerPage = 40; 
let currentPage = 0; 

const productosAutos = [
    {
        "codigo": 1,
        "accesorio": "Camara de reversa",
        "producto": "Accesorios de seguridad",
        "cantidad": 5,
        "precio": 60000,
        "disponibilidad": "Disponible",
        "url": "https://soniledmedellin.com/wp-content/uploads/2021/03/2-1-4.jpg"
    },
    {
        "codigo": 2,
        "accesorio": "alarma",
        "producto": "Accesorios de seguridad",
        "cantidad": 10,
        "precio": 120000,
        "disponibilidad": "Disponible",
        "url": "https://http2.mlstatic.com/D_NQ_NP_958616-MCO75479013551_032024-O.webp"
    },
    {
        "codigo": 3,
        "accesorio": "sensor estacionamiento",
        "producto": "Accesorios de seguridad",
        "cantidad": 20,
        "precio": 15000,
        "disponibilidad": "Disponible",
        "url": "https://repuestoscorrecaminos.co/web/image/product.template/78142/image"
    },
    {
        "codigo": 4,
        "accesorio": "bloqueo volante",
        "producto": "Accesorios de seguridad",
        "cantidad": 15,
        "precio": 20000,
        "disponibilidad": "Disponible",
        "url": "https://http2.mlstatic.com/D_NQ_NP_869902-MCO75071887402_032024-O.webp"
    },
    {
        "codigo": 5,
        "accesorio": "kit primeros auxilios",
        "producto": "Accesorios de emergencia",
        "cantidad": 30,
        "precio": 25000,
        "disponibilidad": "Disponible",
        "url": "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/226463/public"
    },
    {
        "codigo": 6,
        "accesorio": "extintor",
        "producto": "Accesorios de emergencia",
        "cantidad": 40,
        "precio": 10000,
        "disponibilidad": "Disponible",
        "url": "https://www.provesi.com.co/2500-large_default/extintor-5-libras-abc.jpg"
    },
    {
        "codigo": 7,
        "accesorio": "Cinturon mascotas",
        "producto": "Accesorios de seguridad",
        "cantidad": 8,
        "precio": 45000,
        "disponibilidad": "Disponible",
        "url": "https://laiguanashop.com.co/cdn/shop/files/Sf3433fbcde4247a58d448bc10d0ebf4dm_grande.jpg?v=1694481209"
    },
    {
        "codigo": 8,
        "accesorio": "cadenas",
        "producto": "Accesorios de seguridad",
        "cantidad": 22,
        "precio": 16000,
        "disponibilidad": "Disponible",
        "url": "https://i.ebayimg.com/thumbs/images/g/lI4AAOSwrFRmxQ-a/s-l1200.jpg"
    },
    {
        "codigo": 9,
        "accesorio": "luces antiniebla",
        "producto": "Accesorios de iluminación",
        "cantidad": 14,
        "precio": 25000,
        "disponibilidad": "Disponible",
        "url": "https://torque.com.co/cdn/shop/files/61hdGkViQ3L._AC_SL1500.jpg?v=1714288050"
    },
    {
        "codigo": 10,
        "accesorio": "GPS",
        "producto": "Accesorios de tecnología",
        "cantidad": 30,
        "precio": 300000,
        "disponibilidad": "Disponible",
        "url": "https://http2.mlstatic.com/D_NQ_NP_981404-MLU70638786999_072023-O.webp"
    },
    {
        "codigo": 11,
        "accesorio": "cubreasientos",
        "producto": "Accesorios de confort",
        "cantidad": 30,
        "precio": 30000,
        "disponibilidad": "Disponible",
        "url": "https://http2.mlstatic.com/D_NQ_NP_812600-MLU69951150216_062023-O.webp"
    },
    {
        "codigo": 12,
        "accesorio": "alfombrilla",
        "producto": "Accesorios de confort",
        "cantidad": 15,
        "precio": 150000,
        "disponibilidad": "Disponible",
        "url": "https://http2.mlstatic.com/D_NQ_NP_983649-MCO74340557039_022024-O.webp"
    },
    {
        "codigo": 13,
        "accesorio": "Cargador USB",
        "producto": "Accesorios de tecnología",
        "cantidad": 30,
        "precio": 16000,
        "disponibilidad": "Disponible",
        "url": "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/118231183_01/w=800,h=800,fit=pad"
    },
    {
        "codigo": 14,
        "accesorio": "Refrigerador portatil",
        "producto": "Accesorios de confort",
        "cantidad": 5,
        "precio": 70000,
        "disponibilidad": "Disponible",
        "url": "https://exitocol.vtexassets.com/arquivos/ids/12965271/mini-nevera-para-autos-refrigerador-electronico-portatil.jpg?v=637889366115400000"
    },
    {
        "codigo": 15,
        "accesorio": "organizador de maletero",
        "producto": "Accesorios de organización",
        "cantidad": 10,
        "precio": 30000,
        "disponibilidad": "Disponible",
        "url": "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/128828520_01/w=800,h=800,fit=pad"
    },
    {
        "codigo": 16,
        "accesorio": "retrovisor",
        "producto": "Accesorios de seguridad",
        "cantidad": 8,
        "precio": 250000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 17,
        "accesorio": "soporte celular",
        "producto": "Accesorios de tecnología",
        "cantidad": 20,
        "precio": 7000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 18,
        "accesorio": "protetor parabrisas",
        "producto": "Accesorios de protección",
        "cantidad": 10,
        "precio": 25000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 19,
        "accesorio": "asiento masajeador",
        "producto": "Accesorios de confort",
        "cantidad": 5,
        "precio": 280000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 20,
        "accesorio": "Difunsor de aromas",
        "producto": "Accesorios de confort",
        "cantidad": 22,
        "precio": 15000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 21,
        "accesorio": "Aleron Trasero",
        "producto": "Accesorios de rendimiento",
        "cantidad": 8,
        "precio": 200000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 22,
        "accesorio": "Tapas valvulas personalizadas",
        "producto": "Accesorios de personalización",
        "cantidad": 10,
        "precio": 25000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 23,
        "accesorio": "vinilos decorativos",
        "producto": "Accesorios de personalización",
        "cantidad": 10,
        "precio": 32000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 24,
        "accesorio": "llantas de aleacion",
        "producto": "Accesorios de rendimiento",
        "cantidad": 20,
        "precio": 450000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 25,
        "accesorio": "volante deportivo",
        "producto": "Accesorios de rendimiento",
        "cantidad": 9,
        "precio": 60000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 26,
        "accesorio": "faros led",
        "producto": "Accesorios de iluminación",
        "cantidad": 7,
        "precio": 25000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 27,
        "accesorio": "pedales de aluminio",
        "producto": "Accesorios de rendimiento",
        "cantidad": 6,
        "precio": 40000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 28,
        "accesorio": "emblemas",
        "producto": "Accesorios de personalización",
        "cantidad": 7,
        "precio": 28000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 29,
        "accesorio": "manijas cromadas",
        "producto": "Accesorios de personalización",
        "cantidad": 20,
        "precio": 25000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 30,
        "accesorio": "faros led",
        "producto": "Accesorios de iluminación",
        "cantidad": 7,
        "precio": 25000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 31,
        "accesorio": "pintura calipers",
        "producto": "Accesorios de personalización",
        "cantidad": 2,
        "precio": 36000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 32,
        "accesorio": "filtro de aire",
        "producto": "Accesorios de rendimiento",
        "cantidad": 5,
        "precio": 33000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 33,
        "accesorio": "escape deportivo",
        "producto": "Accesorios de rendimiento",
        "cantidad": 3,
        "precio": 258000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 34,
        "accesorio": "chip de rendimiento",
        "producto": "Accesorios de rendimiento",
        "cantidad": 4,
        "precio": 155000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 35,
        "accesorio": "barra estabilizadora",
        "producto": "Accesorios de rendimiento",
        "cantidad": 6,
        "precio": 70000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 36,
        "accesorio": "amortiguadores reforzados",
        "producto": "Accesorios de rendimiento",
        "cantidad": 12,
        "precio": 195000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 37,
        "accesorio": "pastillas de freno",
        "producto": "Accesorios de mantenimiento",
        "cantidad": 40,
        "precio": 12000,
        "disponibilidad": "Disponible",
        "url": ""
    },



    {
        "codigo": 38,
        "accesorio": "radiador mejorado",
        "producto": "Accesorios de rendimiento",
        "cantidad": 4,
        "precio": 288000,
        "disponibilidad": "Disponible",
        "url": ""
    },

    
    {
        "codigo": 39,
        "accesorio": "bateria de auto",
        "producto": "Accesorios de mantenimiento",
        "cantidad": 10,
        "precio": 120000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    {
        "codigo": 40,
        "accesorio": "aceite de motor",
        "producto": "Accesorios de mantenimiento",
        "cantidad": 50,
        "precio": 25000,
        "disponibilidad": "Disponible",
        "url": ""
    },
    
];


let productsLoaded = 0; 
let allProductsLoaded = false; 

function mostrarProductos() {
    if (allProductsLoaded) return; 

    const start = productsLoaded;
    const end = start + productsPerPage;
    const productosPagina = productosAutos.slice(start, end);

    const contenedorProductos = document.getElementById("contenedorProductos");

    productosPagina.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        productoDiv.innerHTML = `
            <img src="${producto.url}" alt="${producto.accesorio}" class="producto-imagen">
            <h3>${producto.accesorio}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Disponibilidad: ${producto.disponibilidad}</p>
            <button onclick="verDetalles(${producto.codigo})">Ver detalles</button>
        `;
        contenedorProductos.appendChild(productoDiv);
    });




function mostrarProductos() {
    const productosParaMostrar = productosFiltrados || productosAutos; 
    const start = currentPage * productsPerPage; 
    const end = start + productsPerPage;
    const productosPagina = productosParaMostrar.slice(start, end);

    const contenedorProductos = document.getElementById("contenedorProductos");

    productosPagina.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        productoDiv.innerHTML = `
            <img src="${producto.url}" alt="${producto.accesorio}" class="producto-imagen">
            <h3>${producto.accesorio}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Disponibilidad: ${producto.disponibilidad}</p>
            <button onclick="verDetalles(${producto.codigo})">Ver detalles</button>
        `;
        contenedorProductos.appendChild(productoDiv);
    });

    
    currentPage++;

    
    if (end >= productosParaMostrar.length) {
        const mensajeFinal = document.createElement("p");
        mensajeFinal.textContent = "No hay más productos por cargar.";
        contenedorProductos.appendChild(mensajeFinal);
    }
}


window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        mostrarProductos();
    }
});








    

    productsLoaded += productosPagina.length;

    if (productsLoaded >= productosAutos.length) {
        allProductsLoaded = true;
        const mensajeFinal = document.createElement("p");
        mensajeFinal.textContent = "No hay más productos por cargar.";
        contenedorProductos.appendChild(mensajeFinal);
    }
}


function verDetalles(codigo) {
    const producto = productosAutos.find(p => p.codigo === codigo);

    document.getElementById("nombreProducto").textContent = producto.accesorio;
    document.getElementById("descripcionProducto").textContent = producto.producto;
    document.getElementById("precioProducto").textContent = producto.precio;
    document.getElementById("cantidadProducto").textContent = producto.cantidad;
    document.getElementById("imagenProducto").src = producto.url;

    document.getElementById("modalProducto").style.display = "block"; // Mostrar modal
}


function cerrarModal() {
    document.getElementById("modalProducto").style.display = "none";
}


function filtrarProductos() {
    const busqueda = document.getElementById("buscador").value.toLowerCase();
    const minPrecio = parseFloat(document.getElementById("min-precio").value) || 0;
    const maxPrecio = parseFloat(document.getElementById("max-precio").value) || Infinity;

    const productosFiltrados = productosAutos.filter(producto => {
        return producto.accesorio.toLowerCase().includes(busqueda) &&
            producto.precio >= minPrecio && producto.precio <= maxPrecio;
    });

    mostrarProductosFiltrados(productosFiltrados);
}


function mostrarProductosFiltrados(productos) {
    const contenedorProductos = document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML = ""; 

    productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        productoDiv.innerHTML = `
            <img src="${producto.url}" alt="${producto.accesorio}" class="producto-imagen">
            <h3>${producto.accesorio}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Disponibilidad: ${producto.disponibilidad}</p>
            <button onclick="verDetalles(${producto.codigo})">Ver detalles</button>
        `;
        contenedorProductos.appendChild(productoDiv);
    });
}


function limpiarFiltros() {
    document.getElementById("buscador").value = "";
    document.getElementById("min-precio").value = "";
    document.getElementById("max-precio").value = "";
    mostrarProductos();
}


document.getElementById("filterButton").addEventListener("click", filtrarProductos);
document.getElementById("clearFilters").addEventListener("click", limpiarFiltros);


mostrarProductos();


function cambiarPagina(pagina) {
    mostrarProductos(pagina);
}





if (!localStorage.getItem('autos')) {
    localStorage.setItem('autos', JSON.stringify(autosIniciales)); 
}


async function cargarAutos() {
    try {
        const response = await fetch('autos.json'); 
        if (!response.ok) {
            throw new Error('Error al cargar autos');
        }
        autos = await response.json();

      
        guardarEnLocalStorage(autos);

        mostrarAutos(autos); 
    } catch (error) {
        console.error(error);
    }
}


function guardarEnLocalStorage(autos) {
    localStorage.setItem('autos', JSON.stringify(autos)); 
}


function mostrarAutos(autos) {
    const contenedor = document.getElementById('contenedorAutos'); 
    contenedor.innerHTML = ''; 

    const start = currentPage * carsPerPage;
    const end = start + carsPerPage;
    const autosPaginados = autos.slice(start, end);

    autosPaginados.forEach(auto => {
        const divAuto = document.createElement('div');
        divAuto.classList.add('auto'); 
        divAuto.innerHTML = `
            <img src="${auto.imagen}" alt="${auto.modelo}">
            <h3>${auto.modelo}</h3>
            <p>Marca: ${auto.marca}</p>
            <p>Precio: $${auto.precio.toLocaleString('es-CO')}</p>
            <p>Año: ${auto.anio}</p>
            <button onclick="verDetalleAuto(${auto.id})">Ver Detalles</button>
            <button onclick="agregarAlCarrito(${auto.id})">Agregar al Carrito</button>
        `;
        contenedor.appendChild(divAuto);
    });
}


function agregarAlCarrito(autoId) {
    const auto = autos.find(a => a.id === autoId);
    if (auto) {
        auto.cantidad = (auto.cantidad || 0) + 1; 
        Swal.fire({
            title: 'Auto agregado',
            text: `${auto.modelo} ha sido agregado al carrito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    }
}


function verDetalleAuto(autoId) {
    const auto = autos.find(a => a.id === autoId);
    if (auto) {
        document.getElementById('modeloAuto').innerText = auto.modelo;
        document.getElementById('imagenAuto').src = auto.imagen;
        document.getElementById('descripcionAuto').innerText = auto.descripcion;
        document.getElementById('precioAuto').innerText = auto.precio.toLocaleString('es-CO');
        document.getElementById('anioAuto').innerText = auto.anio;
       
        document.getElementById('modalAuto').style.display = 'block';
    }
}


function cerrarModal() {
    document.getElementById('modalAuto').style.display = 'none';
}


window.onclick = function (event) {
    const modal = document.getElementById('modalAuto');
    if (event.target === modal) {
        cerrarModal();
    }
}


function guardarAutosEnLocalStorage() {
    localStorage.setItem('autos', JSON.stringify(autos)); 
}


function recuperarAutosDesdeLocalStorage() {
    const autosGuardados = localStorage.getItem('autos');
    return autosGuardados ? JSON.parse(autosGuardados) : [];
}


function agregarAlCarritoAuto(id) {
    const auto = autos.find(item => item.id === id);
    if (auto) {
        
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        
        const autoEnCarrito = carrito.find(item => item.id === auto.id);
        if (autoEnCarrito) {
            
            autoEnCarrito.cantidad++;
        } else {
            
            carrito.push({ ...auto, cantidad: 1 });
        }

        
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(`Auto agregado al carrito: ${auto.modelo}`);
    }
}


function filtrarAutos() {
    const buscador = document.getElementById('buscador').value.toLowerCase();
    const minPrecio = parseInt(document.getElementById('min-precio').value) || 0;
    const maxPrecio = parseInt(document.getElementById('max-precio').value) || Infinity;

    const autosFiltrados = autos.filter(auto => {
        const modelo = auto.modelo.toLowerCase();
        return (modelo.includes(buscador) && auto.precio >= minPrecio && auto.precio <= maxPrecio);
    });

    mostrarAutos(autosFiltrados); 
}


document.getElementById("filterButton").addEventListener("click", filtrarAutos);


document.getElementById('clearFilters').onclick = function () {
    document.getElementById('buscador').value = '';
    document.getElementById('min-precio').value = '';
    document.getElementById('max-precio').value = '';
    mostrarAutos(autos); 
};


document.addEventListener("DOMContentLoaded", () => {
    
    autos = recuperarAutosDesdeLocalStorage();

    
    if (autos.length === 0) {
        fetch('autos.json')
            .then(response => response.json())
            .then(data => {
                autos = data; 
                guardarAutosEnLocalStorage(); 
                mostrarAutos(autos); 
            })
            .catch(error => console.error('Error al cargar los autos:', error));
    } else {
        mostrarAutos(autos); 
    }
});


function inicializar() {
    mostrarAutos(recuperarAutosDesdeLocalStorage()); 
}


document.addEventListener("DOMContentLoaded", cargarAutos);





document.addEventListener("DOMContentLoaded", mostrarProductos);

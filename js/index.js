function cargarContactos() {
    var txtContactos = document.getElementById("txtContactos");
    

    fetch("http://www.raydelto.org/agenda.php").then(function(resultado){
        return resultado.json();
    }).then(function (listado){
        var contacto = listado[0];
        txtContactos.innerHTML = contacto.nombre + " " + contacto.apellido + " (" + contacto.telefono + ")";
    });
}

function agregarContacto() {
    var txtNombre = document.getElementById("txtNombre");
    var txtApellido = document.getElementById("txtApellido");
    var txtTelefono = document.getElementById("txtTelefono");

    var contacto = {
        nombre: txtNombre.value,
        apellido: txtApellido.value,
        telefono: txtTelefono.value
    };

    fetch("http://www.raydelto.org/agenda.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contacto)
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (respuesta) {
        console.log(respuesta);
        cargarContactos();
    });
}

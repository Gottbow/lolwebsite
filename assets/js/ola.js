$(function(){

    fetch('http://localhost/parcialphp/buscar.php')
    .then(function(response) {
        return response.json();
    })
    .then(function(datos) {
        console.log(datos);
        $(datos).each(function(index,value){
            var fila = "<tr>";
            fila += "<td class='text-center'>" + value.IdAsistente + "</td>";
            fila += "<td>" + value.Nombre + "</td>";
            fila += "<td>" + value.Apellido + "</td>";
            fila += "<td>" + value.NumeroHijos + "</td>";
            fila += "<td>" + value.Email + "</td>";
            fila += "<td>" + value.Edad + "</td>";
                $("#tbody-asistentes").append(fila);
        })
    });

})
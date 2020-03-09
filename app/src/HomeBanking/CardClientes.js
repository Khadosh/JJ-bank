const CardCliente = (nombre, Apellido, Dni, Email,  Direccion, Ciudad, Provincia) => `
   <tr>
                <td>${nombre}</td>
                <td>${Apellido}</td>
                <td>${Dni}</td>
                <td>${Email}</td>
                <td>${Direccion}</td>
                <td>${Ciudad}</td>
                <td>${Provincia}</td>
                </tr>
                <button type="button" class="btn btn-outline-warning">Enviar</button>
                <button type="button" class="btn btn-outline-danger">Denegado</button>
       
 `;

//  let agrupar = [];
//  let agruparClientes = document.getElementById("lista");

// let listarClientes = () => {
//     agruparClientes.innerHTML = "";
//     agrupar.forEach(function (item, idenx)){
//         agruparClientes.innerHTML += 
//         }
// }



export default CardCliente
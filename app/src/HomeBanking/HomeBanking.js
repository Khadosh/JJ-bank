let clientes = [];
let listaClientes = document.getElementById(lista);


let listarClientes = () => {

        listaClientes.innerHTML = "";

        clientes.forEach(function (item, indez){

                    listaClientes.innerHTML = `<div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Solicitud de Home Banking</h6>
        </div>
        <div class="card-body">
          <table class="table">
          
            <tr>
             <th>Nombre</th>
             <th>Cliente</th>          
            </tr>
            <tr>
              <td>Diego</td>
              <td><label><input type="checkbox" id="cbox1" value="first_checkbox"> Si</label>
              <input type="checkbox" id="cbox2" value="second_checkbox"> <label for="cbox2">No</label></td>
              <td><button type="button" class="btn btn-outline-warning">Enviar</button></td>
            </tr>
           </table>
        </div>
      </div>`;
    })
}
    

 
    
     
import CardCliente from './CardClientes'
const clientes = [{
  nombre: 'Diego',
  Apellido: 'Olmi',
  Dni: '32520202',
  Email: 'diegolmi@hotmail.com',
  Direccion: 'Cordoba 605',
  Ciudad:'San Miguel de Tucuman',
  Provincia: 'Tucuman',
}];
const NuevosClientes = document.getElementById("clientes");


export const listarClientes = () => {

  NuevosClientes.innerHTML = ""; 

  clientes.forEach(function (cliente, index) {

    NuevosClientes.innerHTML +=  CardCliente(cliente.nombre, cliente.Apellido, cliente.Dni, cliente.Email, cliente.Direccion, cliente.Ciudad, cliente.Provincia)
  })

};
listarClientes();



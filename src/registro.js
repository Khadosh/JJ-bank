function component() {
    const element = document.createElement('div');

    element.innerHTML = `
    <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="row">
    <div class="col">
    <label for="nombre">Nombre</label>
      <input type="text" class="form-control" placeholder="Nombre">
    </div>
    <div class="col">
    <label for="apellido">Apellido</label>
      <input type="text" class="form-control" placeholder="Apellido">
    </div>
  </div>
</form>
<div class="form-check">
<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
<label class="form-check-label" for="exampleRadios1">
  Hombre
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
<label class="form-check-label" for="exampleRadios2">
  Mujer
</label>
</div>

      
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Contraseña</label>
      <input type="password" class="form-control" id="inputPassword4">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Direccion</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Direccion">
  </div>
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Ciudad</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Provincia</label>
      <select id="inputState" class="form-control">
        <option selected> </option>
        <option>Buenos Aires</option>
        <option>Cordoba</option>
        <option>Tucuman</option>
        <option>Santa Fe</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">C.P</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
      
    </div>
  </div>
</div>
    `
  return element
}
document.body.appendChild(component());
function component() {
    const element = document.createElement('div');

    element.innerHTML = `
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
      <form class=check">
            
        <div class="form-group">
          <label for="exampleDropdownFormEmail1">Email </label>
          <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
        </div>
        <div class="form-group">
          <label for="exampleDropdownFormPassword1">Contraseña</label>
          <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Contraseña">
        </div>
        
        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
      <div class="dropdown-divider"></div>
      
      <a class="dropdown-item" href="#">Olvido su contraseña?</a>
    </div>
  
      
    </div>
  </div>
</div>
    `
  return element
}
document.body.appendChild(component());
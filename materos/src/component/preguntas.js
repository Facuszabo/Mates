import '../css/preguntas.css'
function preguntas(){
    return(
        <div class="row">
        <p className='preguntas'>Preguntas frecuentes</p>
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active dudas" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">¿Cómo comprar?</a>
      <a class="list-group-item list-group-item-action dudas" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">¿Cuáles son las formas y tiempos de envío?</a>
      <a class="list-group-item list-group-item-action dudas" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">¿Cuáles son las opciones de pago?</a>
      <a class="list-group-item list-group-item-action dudas" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">¿Tienen alguna manera de certificar su experiencia?</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active respuesta" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
      1-Elegí el producto, seleccioná color y modelo.
      2-Apreta el botoncito de WhatsApp
      3-Consulta por el producto seleccionado
      4-Seleccioná la forma de envío o retiro.
      5-Completá tus datos.
      6-Realizá el pago y finalizá.
        </div>
      <div class="tab-pane fade respuesta" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Enviamos por Correo Argentino, Andreani o Credifin a Domicilio o Sucursal. El tiempo de envío dependerá del destino. Aproximadamente de 2 a 5 días hábiles.</div>
      <div class="tab-pane fade respuesta" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Podés abonar en efectivo, en el local o con código en RapiPago. Transferencias Bancarias o Mercado Pago.Tambien con tarjetas de creditos acercandote a nuestro local o link de pagos</div>
      <div class="tab-pane fade respuesta" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">SIII, para tu tranquilidad y nuestra satisfaccion de que estes seguro a nuestro lado podes pedirnos nuestra experiencia certificada por WhatsApp</div>
    </div>
  </div>
</div>
    )
}
export default preguntas
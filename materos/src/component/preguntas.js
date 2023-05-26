import '../css/preguntas.css'
function preguntas(){
    return(
        <div class="row">
            <p>Preguntas frecuentes</p>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ¿Como comprar?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Es super facil.</strong> Selecciona el producto que mas te guste, apreta el logo de WhatsApp y comunicate directamente con tu vendedor
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      ¿Cuales son los metodos de pagos?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Todos.</strong> Podes realizar tu transferencias, efectivo, tarjetas de debito y/o credito. Tu eliges el mas conveniente para vos
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        ¿Tienen calidad certificada?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Obvio.</strong> Sabemos el peligro y la desconfianza de comprar por primera vez por eso te brindamos nuestras reseñas y sobre todo la mejor calidad
      </div>
    </div>
  </div>
</div>
<div class="preguntadirecta">
  <div class="card-body">
    <h5 class="card-title">¿Tenes alguna otra duda?</h5>
    <h8 class="card-text">Contactate directamente con algun vendedor</h8>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</div>
    )
}
export default preguntas
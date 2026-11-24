// El mismo método utilizado en las clases: fetch, then, for...of e innerHTML.
let contenedor = document.querySelector('#grilla-objetos');
fetch('js/objetos.json')
.then(res => res.json())
.then(objetos => {
  contenedor.innerHTML = '';
  for (objeto of objetos) {
    contenedor.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <article class="card h-100 border-0">
          <div class="d-flex justify-content-between etiqueta mb-3"><span>${objeto.numero} / ${objeto.categoria}</span><span>${objeto.anio}</span></div>
          <img class="foto-objeto img-fluid border border-dark" src="${objeto.imagen}" alt="Fotografía de ${objeto.nombre}, diseñado por ${objeto.disenador}">
          <div class="ficha mt-3 d-flex flex-column">
            <h3>${objeto.nombre}</h3>
            <p class="mb-1">${objeto.disenador}</p>
            <p class="mb-2"><strong>Material:</strong> ${objeto.material}</p>
            <p class="descripcion">${objeto.descripcion}</p>
            <a href="${objeto.fuente}" target="_blank" rel="noopener">CONOCER LA PIEZA ↗</a>
          </div>
        </article>
      </div>`;
  }
});


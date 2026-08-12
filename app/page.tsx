const Arrow = () => <span aria-hidden="true">↗</span>;

const services = [
  {
    number: "01",
    title: "Transporte por carretera",
    text: "Planificamos cada trayecto para que tu mercancía llegue donde debe, cuando debe.",
  },
  {
    number: "02",
    title: "Coordinación logística",
    text: "Un único interlocutor para organizar rutas, tiempos y necesidades de cada expedición.",
  },
  {
    number: "03",
    title: "Soluciones a medida",
    text: "Estudiamos cada operación de forma individual y adaptamos el servicio a tu empresa.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Fenis Díaz, inicio">
          <span className="brand-mark">FD</span>
          <span>Fenis Díaz<small>Transportes y logística</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#empresa">Empresa</a>
          <a href="#cobertura">Cobertura</a>
        </nav>
        <a className="header-cta" href="#contacto">Solicitar presupuesto <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Córdoba · España</p>
          <h1>Tu mercancía,<br />siempre en <em>movimiento.</em></h1>
          <p className="hero-intro">Transporte y coordinación logística para empresas que necesitan respuestas claras, rutas bien organizadas y un servicio en el que confiar.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Cuéntanos qué necesitas <Arrow /></a>
            <a className="button button-link" href="#servicios">Conocer servicios <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="route-visual" aria-label="Representación gráfica de una ruta logística desde Córdoba">
          <div className="route-grid" />
          <span className="route-label route-label-a">CÓRDOBA</span>
          <span className="route-label route-label-b">DESTINO</span>
          <span className="route-point route-point-a" />
          <span className="route-point route-point-b" />
          <div className="route-line"><span className="route-truck">FD</span></div>
          <div className="route-status"><span /> En ruta</div>
        </div>
        <div className="hero-foot">
          <span>01 — 05</span>
          <p>Desde Córdoba, conectados con cada destino.</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Valores de Fenis Díaz">
        <p>Una logística que habla claro.</p>
        <div><span>Planificación</span><span>Seguimiento</span><span>Compromiso</span></div>
      </section>

      <section className="section services" id="servicios">
        <div className="section-kicker">Lo que hacemos</div>
        <div className="section-heading">
          <h2>Movemos tu negocio<br />sin hacerte perder el tiempo.</h2>
          <p>Convertimos una operación compleja en un proceso sencillo: hablamos contigo, organizamos la ruta y mantenemos la comunicación de principio a fin.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <i aria-hidden="true">→</i>
            </article>
          ))}
        </div>
      </section>

      <section className="company" id="empresa">
        <div className="company-image" aria-hidden="true">
          <div className="road-lines"><span /><span /><span /></div>
          <div className="company-stamp"><strong>FD</strong><small>CÓRDOBA</small></div>
        </div>
        <div className="company-copy">
          <p className="eyebrow dark"><span /> Nuestra forma de trabajar</p>
          <h2>Cercanía para coordinar.<br />Experiencia para cumplir.</h2>
          <p>En Fenis Díaz S.L. entendemos que detrás de cada carga hay compromisos, clientes y plazos. Por eso trabajamos con comunicación directa y atención personalizada en cada servicio.</p>
          <ul>
            <li><span>01</span> Atención directa y resolutiva</li>
            <li><span>02</span> Planificación adaptada a cada operación</li>
            <li><span>03</span> Información clara durante el trayecto</li>
          </ul>
        </div>
      </section>

      <section className="coverage" id="cobertura">
        <div className="coverage-copy">
          <p className="eyebrow"><span /> Cobertura</p>
          <h2>El punto de partida es Córdoba.<br />El destino lo marcas tú.</h2>
          <p>Cuéntanos el origen, el destino y las características de tu envío. Estudiaremos la mejor forma de organizarlo.</p>
        </div>
        <div className="coverage-orbit" aria-hidden="true">
          <span className="orbit orbit-one" /><span className="orbit orbit-two" />
          <strong>37.88° N<br />4.78° W</strong>
          <small>CÓRDOBA</small>
        </div>
      </section>

      <section className="contact" id="contacto">
        <p className="eyebrow dark"><span /> Hablemos de tu próximo envío</p>
        <div className="contact-grid">
          <div className="contact-intro">
            <h2>Â¿QuÃ© necesitas<br /><em>mover?</em></h2>
            <p>CuÃ©ntanos los detalles de tu envÃ­o y te responderemos con una propuesta clara.</p>
          </div>
          <form className="contact-form" action="https://formsubmit.co/lopezdiazjoseangel884@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="Nueva solicitud desde la web de Fenis Diaz" />
            <input type="hidden" name="_next" value="https://joseangellopezdiaz.github.io/Fenis-Diaz-S.L./?enviado=1#contacto" />
            <input type="text" name="_honey" className="form-honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="form-row">
              <label>Nombre o empresa<input name="Nombre o empresa" type="text" autoComplete="name" required /></label>
              <label>TelÃ©fono<input name="TelÃ©fono" type="tel" autoComplete="tel" required /></label>
            </div>
            <label>Correo electrÃ³nico<input name="Correo electrÃ³nico" type="email" autoComplete="email" required /></label>
            <div className="form-row">
              <label>Origen<input name="Origen" type="text" placeholder="Ciudad o direcciÃ³n" required /></label>
              <label>Destino<input name="Destino" type="text" placeholder="Ciudad o direcciÃ³n" required /></label>
            </div>
            <div className="form-row">
              <label>Tipo de mercancÃ­a<input name="Tipo de mercancÃ­a" type="text" required /></label>
              <label>Fecha estimada<input name="Fecha estimada" type="date" /></label>
            </div>
            <label>ExplÃ­canos quÃ© necesitas<textarea name="Necesidad" rows={5} placeholder="Volumen, peso, condiciones especiales, frecuencia u otros detallesâ€¦" required /></label>
            <label className="privacy-check"><input type="checkbox" name="Consentimiento" value="Aceptado" required /><span>Acepto que Fenis Diaz utilice estos datos para responder a mi solicitud.</span></label>
            <button type="submit">Solicitar propuesta <span aria-hidden="true">â†—</span></button>
            <p className="form-note">Los campos son necesarios para poder preparar la propuesta.</p>
          </form>
        </div>      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">FD</span><span>Fenis Díaz<small>Transportes y logística</small></span></a>
        <p>Fenis Díaz S.L. · Córdoba, España</p>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}

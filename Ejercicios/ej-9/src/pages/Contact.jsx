import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <div className="text-white mt-4">
        <h2>Contacto</h2>
        <p>
          ¡Nos encantaría saber de ti! Puedes ponerte en contacto con nosotros
          de las siguientes formas:
        </p>

        <h3>Información de Contacto:</h3>
        <ul>
          <li>
            <strong>Dirección:</strong> Canelones 1162, Montevideo, Uruguay
          </li>
          <li>
            <strong>Teléfono:</strong> +1234567890
          </li>
          <li>
            <strong>Correo Electrónico:</strong> info@hacklife.com
          </li>
        </ul>

        <h3>Horario de Atención:</h3>
        <p>
          Nuestro equipo está disponible para ayudarte de lunes a viernes de
          9:00 a.m. a 5:00 p.m.
        </p>

        <h3>Formulario de Contacto:</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea className="form-control" id="message" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
      <footer className="mt-3">
        <Footer />
      </footer>
    </div>
    </>
  );
  
};

export default Contact;

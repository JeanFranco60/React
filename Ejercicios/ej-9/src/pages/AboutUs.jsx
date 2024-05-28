import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
    <div className="container">
      <div className="text-white">
        <h2>Sobre Nosotros</h2>
        <p>
          HackLife es una plataforma de streaming de películas y series que se
          especializa en ofrecer contenido de alta calidad para todos los
          amantes del cine y la televisión. Nuestra misión es proporcionar una
          experiencia de entretenimiento única y satisfactoria para nuestros
          usuarios en todo el mundo.
        </p>
        <p>
          En HackLife, nos esforzamos por ofrecer una amplia variedad de
          contenido, desde clásicos atemporales hasta las últimas novedades en
          cine y televisión. Nuestro equipo está comprometido con la excelencia
          y trabaja arduamente para garantizar que nuestros usuarios disfruten
          de una experiencia de transmisión sin interrupciones y de la más alta
          calidad.
        </p>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default AboutUs;

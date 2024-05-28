import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-1 text-primary">404</h1>
      <h2 className="text-danger">Página No Encontrada</h2>
      <p className="lead">Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary btn-lg">
        Volver al Inicio
      </Link>
    </div>
  )
}

export default NotFound;

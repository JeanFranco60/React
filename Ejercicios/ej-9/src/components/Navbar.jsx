import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-dark text-white">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-1 m-2" to="/">
          HackLife
        
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

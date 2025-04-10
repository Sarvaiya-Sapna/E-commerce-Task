import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold" to="/products">
            🛍️ ShopEasy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link to="/cart" className="nav-link position-relative">
                  <BsCart3 size={24} />
                  {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

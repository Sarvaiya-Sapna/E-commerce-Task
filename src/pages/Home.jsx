import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { productData } from "../../public/products";

const Home = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        setProducts(productData);
    }, []);

    return (
        <div className="home-container">
            <h2 className="home-title">Products</h2>
            <div className="product-grid">
                {products?.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/product/${product.id}`} className="product-link">
                            <h3 className="product-name">{product.name}</h3>

                            <p className="product-price">₹ {product.price}</p>
                            <p className="product-description">{product.description}</p>
                        </Link>
                        <button
                            onClick={() => addToCart(product)}
                            className="add-to-cart-btn"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
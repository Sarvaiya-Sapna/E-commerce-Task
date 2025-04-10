import { useParams } from "react-router-dom"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { productData } from "../../public/products.json"

const ProductDetails = () => {
    const { id } = useParams();
    const product = productData.find((item) => item.id === parseInt(id));
    const { addToCart } = useContext(CartContext);
    const [qty, setQty] = useState(1);

    if (!product) return <p className="text-center text-red-500">Product not found</p>;

    return (
        <div className="product-details-container">
            <div className="product-card">
                {product.image && (
                    <img src={product.image} alt={product.name} className="product-image" />
                )}
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">₹ {product.price}</p>
                <button
                    onClick={() => addToCart(product, qty)}
                    className="add-to-cart-btn"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
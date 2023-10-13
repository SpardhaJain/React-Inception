import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemsList from "./ItemsList";
import "./Cart.scss";

const Cart = () => {
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="p-around res-details-container cart-container">
            <h1>Cart</h1>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <h3>Your cart is empty</h3>
                ): (
                    <div>
                        <button className="btn btn-primary"
                        onClick={handleClearCart}>Clear Cart</button>
                        <ItemsList itemCards={cartItems} showItems={true} isCart={true}></ItemsList>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
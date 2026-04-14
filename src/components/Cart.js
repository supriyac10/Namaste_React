import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalAmount = cartItems.reduce((total, item) => {
        return total + (item.price || item.defaultPrice || 0);
    }, 0);

    return (
        <div className="max-w-3xl mx-auto p-6">

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Cart</h1>

                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>

            {cartItems.length === 0 && (
                <h2 className="text-center text-gray-500">
                    Your cart is empty 🛒
                </h2>
            )}

            {cartItems.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center p-4 mb-3 border rounded-lg shadow-sm"
                >
                    <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">
                            ₹{(item.price || item.defaultPrice) / 100}
                        </p>
                    </div>

                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-200" onClick={() => handleRemoveItem(item.uniqueId)}>
                        Remove
                    </button>
                </div>
            ))}

            {cartItems.length > 0 && (
                <div className="mt-6 p-4 border-t">
                    <h2 className="text-xl font-bold">
                        Total: ₹{totalAmount / 100}
                    </h2>
                </div>
            )}
        </div>
    );
};

export default Cart;
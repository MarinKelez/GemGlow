import react, {useState} from "react";


function Header({background, cart}) {

    const [showCart, setShowCart] = useState(false);

    function showShoppingCart() {
        setShowCart(c => !c);
    }

    function removeItem(index) {
        cart.splice(index, 1);
        showShoppingCart();
    }
    return (
        <>
        <div style={{backgroundColor: background}} className="header">
            <div className="logo">
                <i class="fa-solid fa-gem"></i>
                <h4>GemGlow</h4>
            </div>
            <div>
                <span style={{padding: "10px 0"}} onClick={showShoppingCart}><i class="fa-solid fa-cart-shopping"></i></span>
                <span style={{padding: "10px 0"}}>{cart ? cart.reduce((acc, item) => acc + Number(item.amount), 0) : null}</span>
            </div>
        </div>
        {showCart && (
            <div className="shopping-cart">
                <h2>Your Cart:</h2>
                <ul>
                    {cart.map((item, i) => (
                        <li key={i}>
                        <span style={{padding: "0 5px"}} onClick={() => removeItem(i)}>
                          <i className="fa-solid fa-trash" />
                        </span>
                        {item.name} ({item.amount}) - ${item.price * item.amount}
                      </li>
                    ))}
                </ul>
                <p>Total Amount: {cart.reduce((acc, item) => acc + item.amount * item.price, 0)}$</p>
                <button>Checkout</button>
            </div>
        )}
        </>
    )

}

export default Header;
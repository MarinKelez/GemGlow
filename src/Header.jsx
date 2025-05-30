import react, {useState} from "react";


function Header({background, cart}) {

    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

    const showShoppingCart = () => setShowCart(c => !c);
    const changeShowCheckout = () => {
        setShowCheckout(c => !c);
        if (!showCheckout) showShoppingCart();
    }
        function removeItem(index) {
        cart.splice(index, 1);
        showShoppingCart();
    }
    function addSpace(e) {
        const length = e.target.value.length;
        if(length === 4 || length === 9 || length === 14) e.target.value += " "; 
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
                <button onClick={changeShowCheckout}>Checkout</button>
            </div>
        )}
        {showCheckout && (

            <div className="checkout-window">
                <span onClick={changeShowCheckout}><i class="fa-solid fa-square-xmark"></i></span>
                <h1>Checkout</h1>
                <p>Your Items:</p>
                <ul>
                {cart.map((item, i) => (
                        <li key={i} style={{fontWeight:"bold"}}>
                        {item.name} ({item.amount}) - ${item.price * item.amount}
                        </li>
                    ))}
                </ul>
                <form className="checkout-form">
                    <fieldset>
                        <legend>Address</legend>
                        <div>
                            <label for="first-name">First name:</label><br />
                            <input type="text" id="first-name"></input><br></br>
                            <label for="address">Address:</label><br />
                            <input type="text" id="address"></input><br></br>
                            <label for="postcode">Postcode:</label><br />
                            <input type="number" id="postcode"></input><br></br>
                            <label for="city">City:</label><br />
                            <input type="text" id="city"></input><br></br>
                        </div>
                        <div>
                            <label for="last-name">Last name:</label><br />
                            <input type="text" id="last-name"></input><br></br>
                            <label for="country">Country:</label><br />
                            <input type="text" id="country"></input><br></br>
                            <label for="mobile">Mobile:</label><br />
                            <input type="tel" id="mobile"></input>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Card</legend>
                        <div>
                        <label for="card">Card number:</label><br />
                        <input type="text" onChange={addSpace} maxLength={19} id="card"></input><br />
                        <label for="expiry-date">Expiry date:</label><br />
                        <select>
                            <option value="">Month</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select>
                            <option value="">Year</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                        </select><br></br>
                        </div>
                        <div>
                            <label for="name-card">Name on card:</label><br></br>
                            <input type="text" id="name-card"></input><br />
                            <label for="CVV">CVV:</label><br />
                            <input type="text" maxLength={3} id="CVV"></input>
                        </div>
                    </fieldset>
                    <input type="submit"></input>
                </form>
            </div>
        
        )}
        </>
    )

}

export default Header;
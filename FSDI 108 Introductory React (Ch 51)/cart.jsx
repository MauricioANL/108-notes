import './cart.css';

function Cart(){
    const globarCart = useContext(DataContext).cart;

    function getTotal(){
        let total=0;
        for(let i=0;i<globalCart.length;i++){
            const prod = globarCart[i];
            total+= (prod.quantity * prod.price);
        }

        return total.toFixed(2)
    }

    return(
        <div className="cart-page">
                <h1>We have {globarCart.length} products for you</h1>
            <div className='list'>
                {globarCart.map(prod=>
                <div className='productCar'>
                    <img src={prod.img} alt=""  />
                    <h4>{prod.title}</h4>
                    <label htmlFor="">Price</label>
                    <span>{prod.price}</span>
                    <label htmlFor="">Quantity</label>
                    <span>{prod.quantity}</span>
                    <label htmlFor="">Total</label>
                    <span>{prod.price*prod.quantity}</span>
                    <button type="button" className='btn btn-danger'>Delete</button>
                </div>
            )}

            </div>

            <div className='side-menu'>
                <h4>Total</h4>
                <h2>${getTotal()}</h2>

                <button className='btn btn-outline-danger'>Clear car</button>

            </div>
        </div>
    );
}

export default Cart;
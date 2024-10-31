import QuantityPicker from './QuantityPicker'

function Product(props){
    const [quantity, setQuantity] = useState(1);
    let addToCart = usecontext(DataContext).addToCart;
    function add(){

        let productForCart = {...props, quantity}

        addToCart(productForCart)
    }
    function handleQuantity(qty){
        setQuantity(qty)
    }
    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }
    return(
        <div className="product">
            <img src={props.data.image} alt=""></img>

            <h3>{props.data.title}</h3>

            <div className="product-price">
                <label >${getTotal()}</label>
                <label >${props.data.price.toFixed(2)}</label>
            </div>

            <QuantityPicker onChange={handleQuantity}></QuantityPicker>

            <div className='control'>
                
            </div>

            <button className="btn btn-sm btn-success" onClick={add}>Add</button>

        </div>
    );
}

export default Product;
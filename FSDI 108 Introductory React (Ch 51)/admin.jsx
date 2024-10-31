import './Admin.css';

function Admin(){
    const [coupon, setCoupon]=useState({});
    function handleCouponInput(e){
        console.log(e.target.value)
        const val= e.target.value;
        const name = e.target.name;
        console.log(name,val)
        if(name==="code"){

        }
    };
    function handleProductInput(){

    }
    return(
        <div className="admin">
            <h3>Store Admin</h3>
            <div className="parent">
                <div className="product">
                    <h4>Manager Products</h4>
                    <div className="form">
                        <div>
                            <label >Tilte</label>
                            <input className="form-Control" onChange={handleProductInput} type="text" name="title" id="" />
                        </div>
                        <div>
                            <label >Image</label>
                            <input className="form-Control" type="text" name="" id="" />
                        </div>
                        <div>
                            <label >Category</label>
                            <input className="form-Control" type="text" name="" id="" />
                        </div>
                        <div>
                            <label >Price</label>
                            <input className="form-Control" type="text" name="" id="" />
                        </div>
                        <div className="controls">
                        <button className="btn btn-outline-dark">Save Product</button>
                    </div>
                    </div>
                </div>
                <div className="Coupons">
                    <h4>MAnager Coupons</h4>
                    <div>
                        <label >Code</label>
                        <input className="form-Control" onChange={handleCouponInput} type="text" name="code" id="" />
                    </div>
                    <div>
                        <label >Discount</label>
                        <input className="form-Control" type="text" name="" id="" />
                    </div>
                    <div className="controls">
                        <button className="btn btn-outline-dark">Save Coupon</button>
                    </div>
                </div>
            </div>
        </div>
        // <nav>
        //     <ul>
        //         <li>Config</li>
        //         <li>User</li>
        //         <li>DAta</li>
        //     </ul>
        // </nav>
    );
}

export default Admin;

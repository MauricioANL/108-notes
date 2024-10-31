function GlobalProvider(props){
    const [cart, setCart] = useSate([]);
    const [user, setUser] = useSate({name:'Mauricio',});

    function addToCart(product){
        const copy = [...cart];
        let found = false;
        for(let i=0;i<copy.length; i++){
            let existingProduct = copy[i];
            if(existingProduct._id === product._id){
                found = true;
                existingProduct.quantity+=product.quantity;
            }
        }
        if(!found){

            copy.push(product);
        }

        setCart(copy)
    }


    return (
        <DataContext.Provier value={{
            cart: cart,
            user: user,
        }}></DataContext.Provier>
    )
}   
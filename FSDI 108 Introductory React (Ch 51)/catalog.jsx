import Product from './componnets/products.jsx'
import DataService from './DataService.js'
import {useState, useEffect} from 'react'


function Catalog() {
    const [products,setProducts]= useState([]);
    const [categories,setCategories]= useState([]);
    const [filter,setFilter]= useState("");

    useEffect(function(){
        loadCatalog();
        loadCategories();
        
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts();
        setProducts(prods);
    }



    function loadCategories() {
        let service = new DataService();
        let cats = service.getCategories();
        setCategories(cats);
    }

    function appluFilter(category) {
        setFilter(category)
    }

    function clearFilter(category) {
        setFilter("")
    }

    return (
        <div className="catalof-page">
            <h3>we have {products.lenght} new products for you!</h3>
            <button onClick={clearFilter}>All</button>
            <div classNAme="filters">
                {categories.map(cat => <button onClick={() => appluFilter(cat)} className="btn -btn-sm ">{cat}</button>)}

            </div>

            <div className="catalog-items">
                {
                    products.filter(prod => prod.category === filter || !filter).map((item)=>(
                        <Product key={item._id} data={item}></Product>
                        ))
                }
            
            </div>

        </div>
    )
};

export default Catalog;
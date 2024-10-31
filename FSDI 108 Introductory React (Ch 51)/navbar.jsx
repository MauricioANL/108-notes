import 'navbar.css';
import { Link } from  'react-router-dom';
function Navbar() {
    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;
    function countProduct(){
        let sumQTY = 0;

        for(let i=0;i< cart.length; i++ ){
            sumQTY += cart[i].quantity; 
        }
        return sumQTY

    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Organica</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    <div class="d-flex">
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                        <Link class="btn btn-outline-success" type="submit" to="/cart">{countProduct()}</Link>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;


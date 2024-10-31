import './home.css';
import imgMarc from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmujerfinanzas.com%2Fcomo-ahorrar-en-el-supermercado%2F&psig=AOvVaw0JiqTGqJ9IWdfIjnA1iFaA&ust=1729649592418000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLC5soP1oIkDFQAAAAAdAAAAABAE'

function Home(){
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <h1>Organic Food 1 Click Away!!</h1>
            <img src={imgMarc}></img>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat? Sapiente illo mollitia sint quibusdam ex cupiditate. Tempore necessitatibus, cupiditate consectetur doloribus suscipit illo labore porro, incidunt quae praesentium blanditiis.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat? Sapiente illo mollitia sint quibusdam ex cupiditate. Tempore necessitatibus, cupiditate consectetur doloribus suscipit illo labore porro, incidunt quae praesentium blanditiis.</p>

        </div>
    );
}

export default Home;
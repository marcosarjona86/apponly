import './Navbar.css'
import logo from './assets/cart.svg'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div>
                <h1>OnlyPeople</h1>
                <img src={logo} alt='logo'/>
            </div>
            <div style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                {/*<button className="btn btn-primary">Ofertas</button>
                <button className="btn btn-primary">Coleccion</button>
        <button className="btn btn-primary">Pedidos</button>*/}
                <Button label="Ofertas" callback={() => console.log('Ofertas')}/>
                <Button label="Coleccion" callback={() => console.log('Coleccion')}/>
                <Button label="Pedidos" callback={() => console.log('Pedidos')}/>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar
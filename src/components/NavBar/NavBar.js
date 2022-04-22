import CartWidget from '../CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext'; 

const NavBar = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <nav>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Los Dragones Vinos</Navbar.Brand>
                <Nav className="me-auto">
                <NavLink to= '/'>Home</NavLink>
                <NavLink to= '/category/tintos'>Tintos</NavLink>
                <NavLink to= '/category/blancos'>Blancos</NavLink>
                </Nav>
                </Container>
            </Navbar>
            {getQuantity() > 0 && <CartWidget />}
        </nav>
    )
}

export default NavBar 
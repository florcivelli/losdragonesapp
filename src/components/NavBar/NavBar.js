import CartWidget from '../CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Los Dragones Vinos</Navbar.Brand>
                <Nav className="me-auto">
                <NavLink to= '/'>Home</NavLink>
                <NavLink to= '/tintos'>Tintos</NavLink>
                <NavLink to= '/blancos'>Blancos</NavLink>
                </Nav>
                </Container>
            </Navbar>
            <CartWidget />
        </nav>
    )
}

export default NavBar 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <nav>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home">Los Dragones Vinos</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Vinos</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </nav>
    )
}

export default NavBar 
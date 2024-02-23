import {Link, Outlet} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
export default function Menu() {
    return (
        <>
            <Navbar bg="dark" className="color-nav" variant="dark" expand="sm" sticky="top">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/exercici1">Exercici 1</Link>
                    <Link className="nav-link" to="/exercici2">Exercici 2</Link>
                </Nav>
            </Navbar>
            <Container>
                <Outlet />
            </Container>
        </>
    );
}
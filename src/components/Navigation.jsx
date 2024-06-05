import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";



const Navigation = () => {
    return (
        <Navbar className="Navbar"
            bg="dark"
            variant="dark"
        >
            <Container className="justify-content-start">
                <div className="links">
                🏠
                <Link
                    to="/"
                    className="text-white ms-3 text-decoration-none"
                >
                 Home
                </Link> 
                📩
                <Link
                    to="/planes"
                    className="text-white ms-3 text-decoration-none"
                >
                    Contacto
                </Link> 
                </div>
                
                <Navbar.Brand className="texto"> Happy Cake 🎂 </Navbar.Brand>
            </Container>
            
        </Navbar>
    );
};
export default Navigation;
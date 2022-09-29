import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navbarr = ({texto, getTexto}) => {
  return (
    <Navbar bg="dark" className='py-0' expand="lg">
      <Container>
        <Navbar.Brand >
            <img className='imgNav' src="https://i.pinimg.com/564x/56/1b/a0/561ba0a358ef2b780e37c4f388dad503.jpg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <label style={{padding:'10px'}} >Busca tu personaje favorito</label>
                <input type="text" value={texto} placeholder='Rick Sanchez' onChange={getTexto} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
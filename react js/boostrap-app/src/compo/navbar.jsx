import { Navbar, Nav, Container } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
           <Nav.Link href="/about">service</Nav.Link>
            <Nav.Link href="/about">contact</Nav.Link>
             <Nav.Link href="/about">info</Nav.Link>
              <Nav.Link href="/about">docs</Nav.Link>
               <Nav.Link href="/about">examples</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

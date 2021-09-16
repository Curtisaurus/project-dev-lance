import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="p-4">
        <Container fluid>
          <Navbar.Brand href="/projects" className="text-white">
            devLancer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
          <Navbar.Collapse
            id="navbarScroll"
            className="text-white justify-content-end"
          >
            <Nav
              className="mr-auto my-2 my-lg-0 text-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/projects" className="text-white mx-3">
                Dashboard
              </Nav.Link>
              <Nav.Link href="/login" className="text-white mx-3">
                Login
              </Nav.Link>
              <Nav.Link href="/logout" className="text-white mx-3">
                Logout
              </Nav.Link>
            </Nav>
            <Link to="/create-project">
              <Button variant="success" className="mx-3">
                Start a Project
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;

// import React from "react";
// import { FaBars } from "react-icons/fa";
// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   MobileIcon,
//   NavMenu,
//   NavItem,
//   NavLinks,
//   NavBtn,
//   NavBtnLink,
// } from "./NavbarElements";

// const Navbar = ({ toggle }) => {
//   return (
//     <React.Fragment>
//       <Nav>
//         <NavbarContainer>
//           <NavLogo to="/">devLancer</NavLogo>
//           <MobileIcon onClick={toggle}>
//             <FaBars />
//           </MobileIcon>
//           <NavMenu>
//             <NavItem>
//               <NavLinks to="login">Login</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="logout">Login</NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks to="/">Dashboard</NavLinks>
//             </NavItem>
//           </NavMenu>
//           <NavBtn>
//             <NavBtnLink to="/project-form">Start a Project</NavBtnLink>
//           </NavBtn>
//         </NavbarContainer>
//       </Nav>
//     </React.Fragment>
//   );
// };

// export default Navbar;

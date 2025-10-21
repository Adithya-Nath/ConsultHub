import { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import { FaBars, FaPlus, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SidebarNavbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClose = () => setShowSidebar(false);

  return (
    <>
      <Button
        variant="primary" 
        className="m-2 d-flex align-items-center gap-2 border-0"
        onClick={() => setShowSidebar(true)}
      >
        <FaBars />
      </Button>

      <Offcanvas show={showSidebar} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title className="text-primary">
            Company Actions
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="bg-primary">
          <Nav className="flex-column h-100">
            <Nav.Link
              as={Link}
              to="/" 
              onClick={handleClose} 
              className="text-white d-flex align-items-center gap-2"
            >
              <FaEdit /> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/register-company"
              onClick={handleClose} 
              className="text-white d-flex align-items-center gap-2"
            >
              <FaPlus /> Register Company
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/company-profile" 
              onClick={handleClose} 
              className="text-white d-flex align-items-center gap-2"
            >
              <FaEdit /> My Company Profile
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                console.log("Logout logic here");
                handleClose();
              }}
              className="text-danger d-flex align-items-center gap-2 mt-auto"
              style={{ cursor: "pointer" }} 
            >
              <FaSignOutAlt /> Logout
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
import { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import { FaBars, FaPlus, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function SidebarNavbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user, logout } = useAuth(); 
  

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
            Admin Actions
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="bg-primary">
          <Nav className="flex-column h-100">
            <Nav.Link
              as={Link}
              to="/admin-dashboard" 
              onClick={handleClose} 
              className="text-white d-flex align-items-center gap-2"
            >
              <FaEdit />Admin Dashboard
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/application-list"
              onClick={handleClose} 
              className="text-white d-flex align-items-center gap-2"
            >
              <FaPlus /> Company Register Applications
            </Nav.Link>

            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
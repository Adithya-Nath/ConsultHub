// src/components/SidebarNavbar.jsx
import React, { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import { FaBars, FaPlus, FaEdit,  FaSignOutAlt } from "react-icons/fa";

export default function SidebarNavbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {/* Hamburger button styled */}
      <Button
        style={{
          backgroundColor: "#0b56c7ff", // navy blue
          border: "none",
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
        className="m-2"
        onClick={() => setShowSidebar(true)}
      >
        <FaBars />
      </Button>

      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="start"
        //style={{ backgroundColor: "#1767dfff", color: "white" }
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title style={{  color: "#1767dfff" }}>Company Actions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: "#1767dfff" }}>
          <Nav className="flex-column">
            <Nav.Link
              href="#"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <FaPlus /> Register Company
            </Nav.Link>
            <Nav.Link
              href="#"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >
              <FaEdit /> Update Company Details
            </Nav.Link>

            <Nav.Link
              href="#"
              style={{
                color: "rgba(223, 21, 21, 0.82)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "auto"
              }}
            >
              <FaSignOutAlt /> Logout
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



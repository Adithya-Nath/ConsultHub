import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Table, Button, Card, Modal, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// --- LocalStorage keys ---
const USERS_DB_KEY = 'usersDB';
const APPLICATIONS_DB_KEY = 'companyApplicationsDB';
const APPROVED_COMPANIES_DB_KEY = 'approvedCompaniesDB';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [approvedCompanies, setApprovedCompanies] = useState([]);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [companyToDelete, setCompanyToDelete] = useState(null);

  const refreshData = () => {
    setUsers(JSON.parse(localStorage.getItem(USERS_DB_KEY)) || []);
    setApplications(JSON.parse(localStorage.getItem(APPLICATIONS_DB_KEY)) || []);
    setApprovedCompanies(JSON.parse(localStorage.getItem(APPROVED_COMPANIES_DB_KEY)) || []);
  };

  useEffect(() => {
    refreshData();
  }, []);

  // --- Handlers ---
  const handleApprove = (appId) => {
    const appToApprove = applications.find(app => app.id === appId);
    if (!appToApprove) return;

    const updatedApproved = [...approvedCompanies, { ...appToApprove, companyStatus: "approved" }];
    localStorage.setItem(APPROVED_COMPANIES_DB_KEY, JSON.stringify(updatedApproved));

    handleReject(appId); // remove from pending
  };

  const handleReject = (appId) => {
    const updatedApplications = applications.filter(app => app.id !== appId);
    localStorage.setItem(APPLICATIONS_DB_KEY, JSON.stringify(updatedApplications));
    refreshData();
  };

  const handleDeleteClick = (cmp) => {
    setCompanyToDelete(cmp);
    setShowDeleteModal(true);
  };

  const confirmDeleteCompany = () => {
    if (!companyToDelete) return;
    const updatedCompanies = approvedCompanies.filter(c => c.id !== companyToDelete.id);
    localStorage.setItem(APPROVED_COMPANIES_DB_KEY, JSON.stringify(updatedCompanies));
    setShowDeleteModal(false);
    setCompanyToDelete(null);
    refreshData();
  };

  return (
    <div className="d-flex bg-light" style={{ minHeight: '100vh' }}>
      <div className="container-fluid p-4 w-100">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 mb-0">Admin Dashboard</h1>
          {user ? (
            <Dropdown align="end">
              <Dropdown.Toggle as="a" className="text-decoration-none" style={{ cursor: 'pointer' }}>
                <i className="bi bi-person-circle text-primary" style={{ fontSize: '2.2rem' }}></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Header>
                  <div className="fw-bold">{user.name}</div>
                  <div className="text-muted small">{user.email}</div>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout} className="text-danger">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button variant="outline-primary" onClick={() => navigate('/login')}>Login</Button>
          )}
        </header>

        {/* Tabs */}
        <Tabs defaultActiveKey="applications" id="admin-dashboard-tabs" className="mb-3" fill>
          {/* Applications Tab */}
          <Tab eventKey="applications" title={`📄 Applications (${applications.length})`}>
            <div className="row mt-3">
              {applications.length > 0 ? applications.map(app => (
                <div key={app.id} className="col-lg-4 col-md-6 mb-4">
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <Card.Title>{app.companyName}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{app.companyEmail}</Card.Subtitle>
                      <Card.Text>{app.companyDescription}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-end gap-2 bg-white border-top-0">
                      <Button variant="outline-success" size="sm" onClick={() => handleApprove(app.id)}>Approve</Button>
                      <Button variant="outline-danger" size="sm" onClick={() => handleReject(app.id)}>Reject</Button>
                    </Card.Footer>
                  </Card>
                </div>
              )) : <p className="text-muted p-3">No pending applications.</p>}
            </div>
          </Tab>

          {/* Manage Companies */}
          <Tab eventKey="manageCompanies" title={`🏢 Manage Companies (${approvedCompanies.length})`}>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvedCompanies.map(c => (
                  <tr key={c.id}>
                    <td>{c.companyLogo ? <img src={c.companyLogo} alt="Logo" height={50} /> : <h1 className='bi bi-buildings'></h1>}</td>
                    <td>{c.companyName}</td>
                    <td>{c.companyDescription}</td>
                    <td>{c.companyEmail}</td>
                    <td>{c.companyPhone}</td>
                    <td><span className="badge bg-success">{c.companyStatus}</span></td>
                    <td><Button variant="danger" size="sm" onClick={() => handleDeleteClick(c)}>Delete</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>

          {/* Users Tab */}
          <Tab eventKey="users" title={`👥 Users (${users.length})`}>
            <Table striped bordered hover responsive className="mt-3">
              <thead><tr><th>#</th><th>Name</th><th>Email</th><th>Role</th></tr></thead>
              <tbody>
                {users.map((u, index) => (
                  <tr key={u.id}>
                    <td>{index + 1}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td><span className={`badge ${u.role === 'admin' ? 'bg-primary' : 'bg-info'}`}>{u.role}</span></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton><Modal.Title>Confirm Deletion</Modal.Title></Modal.Header>
        <Modal.Body>Are you sure you want to delete <strong>{companyToDelete?.companyName}</strong>? This action cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={confirmDeleteCompany}>Delete Company</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminDashboard;
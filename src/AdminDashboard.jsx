import { useAuth } from "./context/AuthContext";
function AdminDashboard()
{
      const { user, logout } = useAuth(); 
    
    return(
        <div>
      <div
        className="d-flex justify-content-end align-items-center p-3"
        style={{
          position: 'absolute',
          top: '20px',
          right: '30px',
          gap: '20px',
          zIndex: 10,
        }}
      >
        {user ? (
          <>
            <div className="text-end me-2">
              <div style={{ fontWeight: 600 }}>{user.name}</div>
              <div style={{ fontSize: '0.85rem' }}>{user.email}</div>
            </div>
        <i className="bi bi-person-circle" style={{ fontSize: '2rem' }}></i>         </>
        ) : (
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        )}
      </div>
      <div className="container"> ADMIN DASHBOARD</div>
      </div>
    );
}
export default AdminDashboard
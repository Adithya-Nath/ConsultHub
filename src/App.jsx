import Companylist from "./companylist"
import Homepage from "./homepage"
import SidebarNavbar from "./SidebarNavbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./loginpage";
import CreateAccount from "./createnewaccount";
import RegisterCompany from "./registerCompany";
import CompanyProfile from "./CompanyProfile";
import { AuthProvider } from "./context/AuthContext";
import AdminDashboard from "./AdminDashboard";
import PaymentPage from "./PaymentPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/companylist" element={
              <>
                <SidebarNavbar />
                <Companylist />
              </>
            } />
            <Route
              path="/"
              element={
                <>
                  <SidebarNavbar />
                  <Homepage />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <LoginPage />
                </>
              }
            />
            <Route
              path="/create-account"
              element={
                <>
                  <CreateAccount />
                </>
              }
            />
            <Route
              path="/register-company"
              element={
                <>
                  <SidebarNavbar />
                  <RegisterCompany />
                </>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <>
                  <AdminDashboard />
                </>
              }
            />
            <Route
              path="/company-profile"
              element={
                <>
                  <SidebarNavbar />
                  <CompanyProfile />
                </>
              }
            />
            <Route
              path="/payment-page"
              element={
                <>
                  <SidebarNavbar />
                  <PaymentPage />
                </>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

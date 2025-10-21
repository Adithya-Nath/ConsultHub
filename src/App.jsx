import Companylist from "./companylist"
import Homepage from "./homepage"
import SidebarNavbar from "./SidebarNavbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./loginpage";
import CreateAccount from "./createnewaccount";
import RegisterCompany from "./registerCompany";
import CompanyProfile from "./CompanyProfile";

function App() {
  return (
    <>
      <BrowserRouter>
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
            path="/company-profile"
            element={
              <>
                <SidebarNavbar />
                <CompanyProfile />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

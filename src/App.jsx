import Companylist from "./companylist"
import Homepage from "./homepage"
import Homepage from "./homepage";
import SidebarNavbar from "./SidebarNavbar";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import LoginPage from "./loginpage";
import CreateAccount from "./createnewaccount";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/companylist" element={<Companylist />} />
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
      </Routes>
    </>
  );
}

export default App;

import Homepage from "./homepage";
import SidebarNavbar from "./SidebarNavbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./loginpage";
import CreateAccount from "./createnewaccount";

function App() {
  return (
    <>
      <Router>
        <Routes>
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
      </Router>
    </>
  );
}

export default App;

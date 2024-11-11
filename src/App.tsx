import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import Profile from "./pages/Profile.tsx";
import YourProfile from "./pages/YourProfile.tsx";
import Register from "./pages/Register.tsx";
import OrganisationRegister from "./pages/OrganisationRegister.tsx";
import Login from "./pages/Login.tsx";
import {Marketplace} from "./pages/Marketplace";
import AddListing from "./pages/AddListing.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/yourprofile" element={<YourProfile/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/organisationregister" element={<OrganisationRegister/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/marketplace" element={<Marketplace />}/>
          <Route path={"/add"} element={<AddListing />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

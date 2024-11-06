import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import Profile from "./pages/Profile.tsx";
import YourProfile from "./pages/YourProfile.tsx";
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/yourprofile" element={<YourProfile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

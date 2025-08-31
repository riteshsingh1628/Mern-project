import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignInForm from "./pages/Signin";
import Signup from "./pages/signup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
    </Router>
  );
}

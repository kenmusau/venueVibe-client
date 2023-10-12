import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import LogInForm from "./components/LogInForm/LogInForm";
import ClientDashboard from "./components/ClientDashboard/ClientDashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/signup" element={SignUpForm} /> */}
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/clientDashboard" element={<ClientDashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

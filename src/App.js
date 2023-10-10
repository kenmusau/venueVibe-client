import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import LogInForm from "./components/LogInForm/LogInForm";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/signup" element={SignUpForm} /> */}
        <Route path="/" element={<SignUpForm />} />
        <Route path="/clientlogin" element={<LogInForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

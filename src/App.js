// import { Routes, Route } from "react-router-dom";
import MainRoutes from "./components/Routes/Routes";
// import BookingModal from "./components/ClientDashboard/BookingModal";
function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="booking" element={<BookingModal />} />
      </Routes> */}

      <MainRoutes />
    </div>
  );
}

export default App;

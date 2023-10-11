import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <h2>Venue Vibe Loading ......</h2>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

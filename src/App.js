import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginationForm from "./components/LoginationForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<RegisterForm />} />
        <Route exact path="/logination" element={<LoginationForm />} />
      </Routes>
    </div>
  );
}

export default App;

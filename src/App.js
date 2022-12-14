import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Home" element={<Home />} />

        <Route exact path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

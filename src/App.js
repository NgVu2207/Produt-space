import { Route, Routes } from "react-router-dom";
import Space from "./pages/Space.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Space />} />
      </Routes>
    </>
  );
}

export default App;

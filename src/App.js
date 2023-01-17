import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { OneCocktailPage } from "./pages/OneCocktailPage";
import { Navbar } from "./components/Navbar";
import { CocktailDiscoveryPage } from "./pages/CocktailDiscoveryPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cocktails/:id" element={<OneCocktailPage />} />
        <Route path="/cocktails" element={<CocktailDiscoveryPage />} />
      </Routes>
    </div>
  );
}

export default App;

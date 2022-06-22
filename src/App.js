import { useGlobalContext } from "./context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import SavedCocktails from "./pages/SavedCocktails";
//import components
import CocktailList from "./components/CocktailList";
import Loading from "./components/Loading";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/saved" element={<SavedCocktails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

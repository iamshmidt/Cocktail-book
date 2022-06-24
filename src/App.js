import { useGlobalContext } from "./context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import SavedCocktails from "./pages/SavedCocktails";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/saved" element={<SavedCocktails />}></Route>
        <Route exact path="/cocktail/:id" element={<Detail />}></Route>
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import PlansPage from "./components/PlansPage"
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/planes"
          element={<PlansPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};
export default App;
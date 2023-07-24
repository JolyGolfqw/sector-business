import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TablePage from "../../pages/TablePage/TablePage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:page" element={<TablePage />} />
        <Route path="/" element={<Navigate to="/1" replace />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

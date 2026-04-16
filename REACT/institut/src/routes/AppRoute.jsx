import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stage from "../pages/Stage";
import Etudiant from "../pages/Etudiant";
import Prof from "../pages/Prof";
import Matiere from "../pages/Matiere";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import StageDetail from "../pages/StageDetail";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stage" element={<Stage />} />
          <Route path="/etudiant" element={<Etudiant />} />
          <Route
            path="/prof"
            element={
              <ProtectedRoute>
                <Prof />
              </ProtectedRoute>
            }
          />
          <Route path="/matiere" element={<Matiere />} />
          <Route path="/stage/:id" element={<StageDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

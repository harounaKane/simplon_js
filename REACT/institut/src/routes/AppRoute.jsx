import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stage from "../pages/Stage";
import Etudiant from "../pages/Etudiant";
import Prof from "../pages/Prof";
import Matiere from "../pages/Matiere";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import StageDetail from "../pages/StageDetail";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stage" element={<Stage />} />
          <Route path="/etudiant" element={<Etudiant />} />
          <Route path="/prof" element={<Prof />} />
          <Route path="/matiere" element={<Matiere />} />
          <Route path="/stage/:id" element={<StageDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/404/NotFoundPage";
import Home from "../pages/home/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import RequestServicePage from "./pages/request-service/RequestServicePage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request-service" element={<RequestServicePage />} />
      </Routes>
    </Layout>
  );
}

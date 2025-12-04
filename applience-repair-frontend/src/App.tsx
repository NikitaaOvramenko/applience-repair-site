import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RequestServicePage from "./pages/RequestServicePage";

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

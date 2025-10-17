import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminLayout from "./components/admin/adminLayout/AdminLayout";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </Layout>
  );
}

export default App;

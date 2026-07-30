import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import { ApiKey } from "./pages/ApiKey";
import { Page404 } from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apikey" element={<ApiKey />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import { ApiKey } from "./pages/ApiKey";
import { Page404 } from "./pages/Page404";
import { repoRoot } from "../public/repoRoot";
import { RedirectGitHub404 } from "./components/RedirectGitHub404";

function App() {
  return (
    <BrowserRouter>
      <RedirectGitHub404 />
      <Header />

      <Routes>
        <Route path={repoRoot} element={<Home />} />
        <Route path={repoRoot + "apikey"} element={<ApiKey />} />
        <Route path={"*"} element={<Page404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectView from "./pages/ProjectView";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Footer from "./pages/sub-components/Footer";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectView />} />
          </Routes>
          <Footer />
          <ToastContainer position="top-center" theme="dark" />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

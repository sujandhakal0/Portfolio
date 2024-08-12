import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectView from "./pages/ProjectView";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Footer from "./pages/sub-components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./pages/sub-components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-91np.onrender.com/api/v1/user/me",
          {
            withCredentials: true,
          }
        );
        setUser(data.user);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    getProfile();
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          {isLoading ? (
            <Loader />
          ) : (
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route
                path="/project/:id"
                element={<ProjectView user={user} />}
              />
            </Routes>
          )}
          <Footer />
          <ToastContainer position="top-center" theme="dark" />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

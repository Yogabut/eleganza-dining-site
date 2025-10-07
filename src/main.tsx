import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from "./App.tsx";
import "./index.css";

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return <App />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);


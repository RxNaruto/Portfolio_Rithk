import { useState, type JSX } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(): JSX.Element {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "dark" : ""} font-[var(--font-family-poppins)]`}>
      <div className="bg-white text-black dark:bg-black dark:text-white transition-colors">
        <Navbar dark={dark} setDark={setDark} />
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

import Hero from "./components/Hero"
import "./App.css"
import Datenschutz from "./DatenschutzPage"
import Impressum from "./ImpressumPage"
import Bojentref from "./ProjektPages/Bojentref"
import GroupPlanner from "./ProjektPages/GroupPlanner"
import YourWinChallengePage from "./ProjektPages/YourWinChallenge"
import About from "./components/About"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchInertiaMultiplier: 35,
      gestureOrientation: "vertical",
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy()
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative">
              <Hero />
              <About />
              <Projects />
              <Contact />
            </div>
          }
        />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="yourwinchallenge" element={<YourWinChallengePage />} />
        <Route path="bojentref" element={<Bojentref />} />
        <Route path="group-planner" element={<GroupPlanner />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
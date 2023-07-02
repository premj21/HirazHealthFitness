// import { Routes,Route } from "react-router-dom"
import { Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import {  useRef, } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Login from "./components/Login";
import Workouts from './components/Workouts';
import Vide from "./components/Vide";
import Diet from "./components/Diet";
// import {motion} from 'framer-motion';
function App() {
    const containerRef = useRef(null);

  

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          
          <Routes>
            <Route exact path="/Login" element={<Login />} />
            <Route
              exact
              path="/"
              element={
                <>
                
                  <Navbar />
                  <Home />
                  <About />
                  <Workouts />
                  <Footer />
                  <Vide />
                  <Diet />
                </>
              }
            />
          </Routes>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
export default App

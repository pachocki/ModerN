
import './App.css';
import './locomotive-scroll.css';
import { Route , Routes} from 'react-router-dom';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import {useRef} from 'react';
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";



function App() {
  
  const containerRef = useRef(null)
  
  return (
    <div className='App' data-scroll-container ref={containerRef}>
      <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone:{
              smooth:true,
            },
            tablet:{
              smooth:true,
            }
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
   <Routes>
      <Route path="ModerN" index element={<Home/>}/>
      <Route path="Projects" element={<Projects/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="Contact" element={<Contact/>}/>
    </Routes>
    </LocomotiveScrollProvider>
    </div>
    
  );
}

export default App;

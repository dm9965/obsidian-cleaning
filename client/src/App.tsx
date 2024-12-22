import './assets/stylesheets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation.tsx";
import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import LandingPage from "./components/LandingPage.tsx";
import Estimates from "./components/Estimates.tsx";
import About from "./components/About.tsx";
import Services from "./components/Services.tsx";
import Footer from "./components/Footer.tsx";


function App() {
    useEffect(() => {
        const element = document.getElementById('fade-in');
        setTimeout(() => {
            element.classList.add("tw-opacity-100")
        }, 100);
    }, [])

    return (
      <body
           className={"tw-w-lvw tw-overflow-y-scroll tw-flex tw-flex-col tw-justify-start"}>
           <Navigation/>
           <div id={'fade-in'} className={"tw-flex tw-flex-col tw-w-full tw-opacity-0 tw-transition-opacity tw-duration-500 tw-ease-in"}>
              <BrowserRouter>
                 <Routes>
                    <Route path={"/"} element={<LandingPage/>}/>
                    <Route path={"/Services"} element={<Services/>}/>
                    <Route path={"/About"} element={<About/>}/>
                    <Route path={"/Estimates"} element={<Estimates/>}/>
                 </Routes>
              </BrowserRouter>
           </div>
           <Footer/>
        </body>
    )
}

export default App;

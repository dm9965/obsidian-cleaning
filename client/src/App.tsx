import './assets/stylesheets/App.css'
import Navigation from "./components/Navigation.tsx";
import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import LandingPage from "./components/LandingPage.tsx";
import Locations from "./components/Locations.tsx";
import MoreInfo from "./components/MoreInfo.tsx";
import Reviews from "./components/Reviews.tsx";
import Services from "./components/Services.tsx";


function App() {
    useEffect(() => {
        const element = document.getElementById('fade-in');
        setTimeout(() => {
            element.classList.add("tw-opacity-100")
        }, 100);
    }, [])

    return (
      <div id={'fade-in'}
           className={"tw-w-lvw tw-p-3 tw-opacity-0 tw-transition-opacity tw-duration-1000 tw-ease-in tw-flex tw-flex-col "}>
           <Navigation/>
           <div className={"tw-flex tw-flex-col"}>
              <BrowserRouter>
                 <Routes>
                    <Route path={"/"} element={<LandingPage/>}/>
                    <Route path={"/Services"} element={<Services/>}/>
                    <Route path={"/Locations"} element={<Locations/>}/>
                    <Route path={"/MoreInfo"} element={<MoreInfo/>}/>
                    <Route path={"/Reviews"} element={<Reviews/>}/>
                 </Routes>
              </BrowserRouter>
           </div>
        </div>
    )
}

export default App;

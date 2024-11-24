import './assets/stylesheets/App.css'
import Navigation from "./components/Navigation.tsx";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        const element = document.getElementById('fade-in');
        setTimeout(() => {
            element.classList.add("tw-opacity-100")
        }, 100);
    }, [])

  return (
      <div id={'fade-in'}
           className={"tw-w-lvw tw-p-3 tw-opacity-0 tw-transition-opacity tw-duration-1000 tw-ease-in grid-background tw-flex tw-flex-col"}>
          <Navigation/>
          <div
              className={"tw-my-6 tw-w-full tw-p-6 tw-border-4 tw-border-obsidianPink tw-h-[20rem] tw-bg-background"}>
              <h2 className={"tw-font-header tw-text-2xl tw-p-3"}> Services </h2>
          </div>
          <div
              className={"tw-my-6 tw-w-full tw-p-6 tw-border-4 tw-border-obsidianPink tw-h-[20rem] tw-bg-background"}>
              <h2 className={"tw-font-header tw-text-2xl tw-p-3"}> Locations </h2>
          </div>
          <div className={"tw-fixed tw-bottom-0"}>
              <a href="https://www.textstudio.com/">Font generator</a>
          </div>
      </div>
  )
}

export default App;

import './assets/stylesheets/App.css'
import Navigation from "./components/Navigation.tsx";

function App() {
  return (
      <div className={"tw-w-lvw tw-p-3"}>
          <Navigation />
          <div className={"retro-container tw-w-full tw-p-6"}>
              <h2 className={"tw-text-2xl"}> Services </h2>
          </div>
      </div>
  )
}

export default App;

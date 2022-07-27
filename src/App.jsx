import ldlogo from "./ld-light.png";
import toggle from "./toggle_thumbsup.png";
import "./App.css";
import { useFlags } from "launchdarkly-react-client-sdk";
import Header from "./components/header";
import Release from "./components/release";

function App() {
  const { newui } = useFlags();
  console.log(newui)
  return (
    <div className="App h-screen bg-black bg-cover bg-no-repeat">
        {newui ? 
        <div className="grid h-screen bg-ldls bg-cover bg-no-repeat grid-cols-4 grid-rows-3 items-center">
          <div className="grid body row-start-2 col-start-2 col-span-2 xl:col-span-1 xl:col-start-1 bg-black-4 items-center">
          <img
              src={toggle}
              className="mx-auto App-fade h-1/3 xl:h-2/3"
              alt="logo"
            />
          </div>
          <header className="App-header App-fade row-start-1 xl:row-start-2 col-span-4 xl:col-span-3 xl:col-start-2 body grid">
            <Header />
          </header>
          <div className="body grid row-start-3 col-span-4 xl:col-start-2 xl:col-span-3 xl:row-start-3">
          <Release />
        </div>
        </div>
        :
        (
        <div className="grid h-screen items-center">
          <img
                src={ldlogo}
                className="mx-auto App-pulse h-56 lg:h-60 2xl:h-80"
                alt="logo"
              />
        </div>
        )}
        </div>
  );
}

export default App;

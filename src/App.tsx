import "./App.css";
import { LightningBolt } from "./Components/Icons/LightningBolt";
import { HeroLogo } from "./Components/HeroLogo/HeroLogo";

function App() {
  return (
    <>
      <HeroLogo>
        <LightningBolt width={96} />
      </HeroLogo>
    </>
  );
}

export default App;

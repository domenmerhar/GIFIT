import "./App.css";
import { LightningBolt } from "./Components/Icons/LightningBolt";
import { HeroLogo } from "./Components/HeroLogo/HeroLogo";
import { AcademicHat } from "./Components/Icons/AcademicHat";

function App() {
  return (
    <>
      <HeroLogo>
        <LightningBolt width={120} />
      </HeroLogo>
    </>
  );
}

export default App;

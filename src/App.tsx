import "./App.css";
import { LightningBolt } from "./Components/Icons/LightningBolt";
import { HeroLogo } from "./Components/HeroLogo/HeroLogo";
import { Instruction } from "./Components/Instruction/Instruction";
import { AcademicHat } from "./Components/Icons/AcademicHat";

function App() {
  return (
    <>
      <HeroLogo>
        <LightningBolt width={120} />
      </HeroLogo>
      <h2>Transforming into GIFs has never been easier!</h2>

      <ul>
        <Instruction>
          <AcademicHat width={40} />
          <span>
            Click the 'Upload' button to select the video you want to transform
            into a GIF.
          </span>
        </Instruction>
        <Instruction>
          <span>Then simply GIFIT and let the magic unfold.</span>
        </Instruction>
      </ul>
    </>
  );
}

export default App;

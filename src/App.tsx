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

      <ul style={{ padding: 0 }}>
        <Instruction>
          <AcademicHat width={40} />
          <span>Click the 'Upload' button and select a video.</span>
        </Instruction>
        <Instruction>
          <span>GIFIT and let the magic unfold.</span>
        </Instruction>
      </ul>
    </>
  );
}

export default App;

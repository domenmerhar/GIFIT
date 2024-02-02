import "./App.css";
import { LightningBolt } from "./Components/Icons/LightningBolt";
import { HeroLogo } from "./Components/HeroLogo/HeroLogo";
import { Instruction } from "./Components/Instruction/Instruction";
import { ArrowUpOnSquare } from "./Components/Icons/ArrowUpOnSquare";
import { GIFITSpan } from "./Components/GIFITSpan/GIFITSpan";
import { GIFConverter } from "./Components/GIFConverter/GIFConverter";

function App() {
  return (
    <>
      <HeroLogo>
        <LightningBolt width={120} />
      </HeroLogo>
      <h2>Transforming into GIFs has never been easier!</h2>

      <ul style={{ padding: 0 }}>
        <Instruction>
          <ArrowUpOnSquare width={32} />
          <span>Click the 'Upload' button and select a video.</span>
        </Instruction>
        <Instruction>
          <LightningBolt width={32} />
          <span>
            <GIFITSpan fontSize={22} /> and let the magic unfold.
          </span>
        </Instruction>
      </ul>
      <GIFConverter />
    </>
  );
}

export default App;

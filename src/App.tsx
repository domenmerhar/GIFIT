import "./App.css";
import { LightningBolt } from "./Components/Icons/LightningBolt";
import { HeroLogo } from "./Components/HeroLogo/HeroLogo";

function App() {
  return (
    <>
      <HeroLogo>
        <LightningBolt width={120} />
      </HeroLogo>
      <h2>Transforming into GIFs has never been easier!</h2>
      <ul>
        <li>
          Click the 'Upload' button to select the video you want to transform
          into a GIF.
        </li>
        <li>Then simply GIFIT and let the magic unfold.</li>
      </ul>
    </>
  );
}

export default App;

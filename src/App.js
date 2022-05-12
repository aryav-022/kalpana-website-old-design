import  { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Journey from './components/Journey';
import Team from './components/Team';
import Sponsers from './components/Sponsers';

// export const COLOR_PALETTE = {
//   GREEN: "#00fd05",
//   BLUE: "#0000ff",
//   YELLOW: "#ffec00",
//   ORANGE: "#ff8100",
//   SECONDARY_DARK: "#666666",
//   PRIMARY_DARK: "#959595",
//   SECONDARY_LIGHT: "#c2c2c2",
//   PRIMARY_LIGHT: "#f4f4f4"
// };

// Theme Colors
// const GREEN = COLOR_PALETTE.GREEN;
// const BLUE = COLOR_PALETTE.BLUE;
// const YELLOW = COLOR_PALETTE.YELLOW;
// const ORANGE = COLOR_PALETTE.ORANGE;

// // Text Colors
// const SECONDARY_DARK = COLOR_PALETTE.SECONDARY_DARK;
// const PRIMARY_DARK = COLOR_PALETTE.PRIMARY_DARK;
// const SECONDARY_LIGHT = COLOR_PALETTE.SECONDARY_LIGHT;
// const PRIMARY_LIGHT = COLOR_PALETTE.PRIMARY_LIGHT;

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar
          color='#00ffa9'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          style={{zIndex: 10}}
      />
      <Navbar setProgress={setProgress} />
      <Routes>
        <Route path="/" element={<Home setProgress={setProgress} />}></Route>
        <Route exact path="/about" element={<About setProgress={setProgress} />}></Route>
        <Route exact path="/team" element={<Team setProgress={setProgress} />}></Route>
        <Route exact path="/journey" element={<Journey setProgress={setProgress} />}></Route>
        <Route exact path="/sponsers" element={<Sponsers setProgress={setProgress} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [hoverign, setHovering] = useState(false);
  return (
    <div className="App">
      {hoverign && <div className="toolTip">React</div>}
      <button
        onMouseOver={() => setHovering(true)}
        onMouseOut={() => setHovering(false)}
      >
        tooltip
      </button>
    </div>
  );
}

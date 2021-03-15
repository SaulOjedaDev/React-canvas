import React, { Fragment, useEffect } from "react";
import CanvasScreen from "./screens/canvasScreen/CanvasScreen";

function App() {
  useEffect(() => {
    window?.scrollTo(0, 1);
  }, []);

  return (
    <Fragment>
      <CanvasScreen />
    </Fragment>
  );
}

export default App;

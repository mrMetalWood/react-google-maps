import * as React from 'react';

function ControlPanel() {
  return (
    <div className="control-panel">
      <h3>Drawing Tools Example</h3>
      <p>
        Shows how to use the Google Maps drawing tools and implements an
        undo/redo flow to show how to interact with the drawing manager and its
        events.
      </p>
      <div className="links">
        <a
          href="https://codesandbox.io/s/github/visgl/react-google-maps/tree/main/examples/drawing"
          target="_new">
          Try on CodeSandbox ↗
        </a>

        <a
          href="https://github.com/visgl/react-google-maps/tree/main/examples/drawing"
          target="_new">
          View Code ↗
        </a>
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);

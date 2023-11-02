import React from 'react';
import {createRoot} from 'react-dom/client';

import {APIProvider, Map} from '@vis.gl/react-google-maps';
import ControlPanel from './control-panel';

import {getApiKey} from './lib/get-api-key';

const App = () => (
  <APIProvider apiKey={getApiKey()}>
    <Map
      zoom={3}
      center={{lat: 22.54992, lng: 0}}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
    <ControlPanel />
  </APIProvider>
);
export default App;

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

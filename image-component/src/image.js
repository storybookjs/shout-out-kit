import React from 'react';
import { render } from 'react-dom';
import { ShoutOut } from './shout-out';

function App() {
  return <ShoutOut image={window.image} username={window.username} />;
}

render(<App />, document.getElementById('app'));

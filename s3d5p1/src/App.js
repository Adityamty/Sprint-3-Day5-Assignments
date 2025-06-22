import React from 'react';
import Greeting from './Greeting';

function App() {
  const userName = "Aditya";

  return (
    <div>
      <Greeting name={userName} />
    </div>
  );
}

export default App;

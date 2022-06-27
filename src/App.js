import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import Counter from './components/Counter';
export const NameContext = React.createContext()
export const ColorContext = React.createContext()
function App() {

  return (
    <div className="App">
    <h1>react</h1>
    <Counter />
    <NameContext.Provider value={'smith'}>
      <ColorContext.Provider value={'red'}>
      <ComponentA />
      </ColorContext.Provider>
     
    </NameContext.Provider>
    
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Filter from './components/Filter/Filter';
function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="App">
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Main
        setIsFilterOpen={setIsFilterOpen}
        isFilterOpen={isFilterOpen}
        isNavOpen={isNavOpen}
      />
      {isFilterOpen && <Filter setIsFilterOpen={setIsFilterOpen} />}
    </div>
  );
}

export default App;

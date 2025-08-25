import React from 'react';

import { Footer, Blog, Header, Features, WhatGPT, Possibility } from './containers';
import { Brand, Navbar, CTA } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradiant__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import HeaderForm from './HeaderForm';
import WaveLogs from './WaveLog/WaveLogHeader';

function App() {
  return (
    <div className="m-auto flex justify-center my-4" style={{ maxWidth: "800px" }}>
      <div className="flex flex-col">
        <Header></Header>
        <HeaderForm></HeaderForm>
        <WaveLogs></WaveLogs>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

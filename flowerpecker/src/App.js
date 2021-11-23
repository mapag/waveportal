import React, { useState } from 'react';

function App() {

  const wave = () => {
    // setCount(count + 1);
  }

  // const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  return (
    <div className="m-auto flex justify-center my-4">

      <div className="flex flex-col">
        <h1 className="text-6xl text-center font-black text-gray-900 py-8">Wave Portal</h1>
        <div className="text-xl text-center font-light text-gray-700 py-8">
          Connect your wallet, write your message, and then wave!
        </div>
        <div className="m-auto">
          <div className="flex flex-col justify-center">
            <textarea onChange={event => setValue(event.target.value)} placeholder="Enter your message here :)" className="resize-none w-96 h-48 border-2 p-2 my-4"></textarea>
            <button className="p-2 border border-black"><p>Wave at me!</p></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

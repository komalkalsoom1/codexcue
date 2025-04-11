import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if(count > 0){
      setCount(count-1)
    }
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Counter App</h1>

      <div className="text-6xl font-semibold mb-8">{count}</div>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg text-lg"
        >
          Increment
        </button>

        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg text-lg"
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-lg text-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

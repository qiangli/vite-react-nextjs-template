import { useState } from 'react';
import Footer from '@/components/footer';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count => count + 1);
  };

  return (
    <>
      <h1>Vite + React + Next.js + TypeScript</h1>
      <div className="card">
        <button onClick={add}>count is {count}</button>
      </div>
      <div className="centered-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;

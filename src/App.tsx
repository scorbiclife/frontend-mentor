import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div>
        <a href="/vite-mpa-test/">Link to vite mpa setup page</a>
      </div>

      <div>
        <a href="/invalid-path/">Invalid Link</a>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

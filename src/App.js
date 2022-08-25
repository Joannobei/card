import File from './components/File';
import './App.css';
import {Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App font-Grotesk">
      <header className="App-header">
<Routes>
<Route path='/' element= {<File />} />
</Routes>

       
      </header>
    </div>
  );
}

export default App;

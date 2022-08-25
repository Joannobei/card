import File from './components/File';
import './App.css';
import {Routes, Route } from "react-router-dom"
import Done from './components/Done'

function App() {
  return (
    <div className="App">
      <header className="App-header">
<Routes>
<Route path='/' element= {<File />} />
  <Route path='done' element= {<Done />} />
</Routes>

       
      </header>
    </div>
  );
}

export default App;


import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Pages/Homepage';
import { Service } from './Pages/Service';
import { Contact } from './Pages/Contatct';
import About from './Pages/About';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' Component={Homepage}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/service' Component={Service}></Route>
          <Route path='/contact' Component={Contact}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

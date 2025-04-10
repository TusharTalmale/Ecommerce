
import { Route, Routes } from 'react-router-dom';
import './App.css';

import CostumerRouter from './Router/CostumerRouter';


function App() {
  return (
    <div className="">
      <Routes>
      <Route path='/*' element={<CostumerRouter/>}></Route>

      </Routes>


    </div>
  );
}

export default App;

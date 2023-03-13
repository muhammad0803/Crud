import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Input} from './pages/input/Input'
import {Malumot} from '../src/pages/malumot/Malumot'
function App() {
  return (
   <Routes>
    <Route path='/' element={<Input/>} />
    <Route path="/malumot" element={<Malumot/>} />
   </Routes>
  );
}

export default App;

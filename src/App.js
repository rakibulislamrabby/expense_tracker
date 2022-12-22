import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
// import InputSection from './components/InputSection';
import Navbar from './components/Navbar';
// import TableSection from './components/TableSection';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;

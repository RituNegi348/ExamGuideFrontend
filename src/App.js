import './App.css';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import {Routes, Route} from 'react-router-dom';
import Register from './Pages/Register';
import MainPage from './Pages/MainPage';
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login  />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path='/mainPage' element = {<MainPage/>}/>
    </Routes>
  );
}

export default App;

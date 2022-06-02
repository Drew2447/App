import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import PagesContainer from './Page/PagesContainer';
import Login from './Page/Login';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Account from './Page/Account';
import User from './Page/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PagesContainer />} >
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='/About' element={<About />} />
          
          <Route element={<ProtectedRoutes />}>
             <Route path='/Account' element={<Account />} />
             <Route path='/User' element={<User />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

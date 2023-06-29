// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Topbar from './components/Topbar';
import Loginpage from './pages/Loginpage';
import Orderpage from './pages/Orderpage';
import Productpage from './pages/Productpage';
import Userpage from './pages/Userpage';

function App() {
  return (
    <BrowserRouter>
    <Topbar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginpage/>}/>
        <Route path="/order" element={<Orderpage/>}/>
        <Route path="/product" element={<Productpage/>}/>
        <Route path="/user" element={<Userpage/>}/>
      </Routes>
       
    </div>
    </BrowserRouter>
  );
}

export default App;

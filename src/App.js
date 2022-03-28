
import './App.css';
import {Navbar} from './Components/Navbar'
import {Routes , Route} from 'react-router-dom'

import {Home} from './Components/Home'
import {Login} from './Components/Login'
import {Register} from './Components/Register'
import {Products} from './Components/Products'

function App() {
  return (
    <div className="App">
     <h1>router</h1>
     <Navbar />
    <Routes>
 <Route path="/" element={<Home />} />

 <Route path="/register" element={<Register />} />
 <Route path="/login" element={<Login />} />
 <Route path='/product' element={<Products/>} />

    </Routes>
    </div>
  );
}

export default App;

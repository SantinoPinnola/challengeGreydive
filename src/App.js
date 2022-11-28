import data from './data/db.json'
import Home from './components/Home';
import Item from './components/Item';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>

    <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/item/:cliente' element={<Item />}/>
    </Routes>
    </Router>
    
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Todo from './components/todo';
import About from './components/about';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/about/:id" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;

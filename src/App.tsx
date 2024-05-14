import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import NotFound from './pages/404';
import S from './pages/7'
import Simple from './pages/8'
import Urgent from './pages/9'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
             <Route path = "/ft28" element = {<S />} />
             <Route path = "/ftyt28" element = {<Simple />} />
             <Route path = "/ftb28" element = {<Urgent />} />
          <Route path = "/*" element = {<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

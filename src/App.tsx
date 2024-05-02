import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import NotFound from './pages/404';
import S from './pages/7'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
             <Route path = "/ft28" element = {<S />} />
          <Route path = "/*" element = {<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

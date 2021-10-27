
import './App.css';
import Search from './components/Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      
       <Route exact path='/' component={Search} />
      
    </div>
    </Router>
  );
}

export default App;

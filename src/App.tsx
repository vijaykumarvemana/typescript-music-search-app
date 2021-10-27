
import './App.css';
import Search from './components/Search';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <Router>
    <div className="App">
      
       <Route exact path='/' component={Search} />
       <Route  path='/details/:Id' render={(routerProps) => <Details {...routerProps} />} />
      
    </div>
    </Router>
  );
}

export default App;

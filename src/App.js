import './App.css';
import MainPage from './pages/MainPage';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ MainPage }  />
    </Switch>
  );
}

export default App;

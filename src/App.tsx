import './App.css';
import { HashRouter } from 'react-router';
import Router from './pages/router';

function App() {
  return (
    <HashRouter basename='/broke-af'>
      <Router />
    </HashRouter>
  );
}

export default App;

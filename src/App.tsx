import './App.css';
import { BrowserRouter } from 'react-router';
import Router from './pages/router';

function App() {
  return (
    <BrowserRouter basename='/broke-af'>
      <Router />
    </BrowserRouter>
  );
}

export default App;

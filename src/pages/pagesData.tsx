import { routerType } from '../types/router.types';
import Home from './Home';
import LoginSignUp from '../components/Login';

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'home',
  },
  {
    path: 'login',
    element: <LoginSignUp />,
    title: 'login',
  },
];

export default pagesData;

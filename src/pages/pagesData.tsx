import { routerType } from '../types/router.types';
import Home from './Home';

const pagesData: routerType[] = [
  {
    path: '/broke-af',
    element: <Home />,
    title: 'home',
  },
];

export default pagesData;

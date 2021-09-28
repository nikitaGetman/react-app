import { PATHS } from '../constants/paths';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';

const routes = [
  { path: PATHS.root, exact: true, component: Dashboard },
  { path: PATHS.login, exact: true, component: Login },
];

export default routes;

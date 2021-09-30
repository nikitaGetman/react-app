import { PATHS } from '../constants/paths';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Settings from '../views/Settings';

const routes = [
  { path: PATHS.root, exact: true, component: Dashboard },
  { path: PATHS.settings, exact: true, component: Settings },
  { path: PATHS.login, exact: true, component: Login },
];

export default routes;

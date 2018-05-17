import About from './About';
import Account from './Account';
import ChangePassword from './ChangePassword';
import Confirmation from './Confirmation';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Login from './Login';
import Oops from './Oops';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import ResetPasswordConfirmation from './ResetPasswordConfirmation';

import AppWrapper from '../containers/AppWrapper';

export const consumerRoutes = [
  { path: '*', component: Oops },
  { path: '/about', component: About },
  { path: '/change-password', component: ChangePassword },
  { path: '/confirmation', component: Confirmation },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/reset-password/:token', component: ResetPassword },
  { path: '/reset-password-confirmation', component: ResetPasswordConfirmation },
  { path: '/account', component: Account },
  { path: '/account', component: Account },
];

export function createRoutes() {
  return ([
    {
      path: '/',
      component: AppWrapper,
      indexRoute: { component: Home },
      childRoutes: consumerRoutes,
    },
  ]);
}

export default createRoutes;

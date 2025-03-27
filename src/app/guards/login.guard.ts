import { CanActivateFn, Router } from '@angular/router';
import { SessionServiceService } from '../session-service.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const sessionService = new SessionServiceService();
  const router = new Router();
  if(!sessionService.isLoggedIn()){
    router.navigate(['/']);
    return false;
  }
  return true;
};

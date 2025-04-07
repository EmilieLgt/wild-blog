import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

export const visitorOnlyGuard: CanActivateFn = () => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);
  if (!authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};

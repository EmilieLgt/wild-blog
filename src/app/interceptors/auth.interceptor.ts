import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthServiceService } from '../../services/auth-service.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  if (req.url.includes('/auth/login')) {
    return next(req);
  }

  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return throwError(() => new Error('Token expiré'));
  }
  const token = authService.getToken();
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  // suppr token
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 || error.status === 403) {
        authService.clearToken();
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};

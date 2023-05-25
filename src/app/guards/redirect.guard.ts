import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TokenService } from '@services/token.service';
import { Router } from '@angular/router';

export const redirectGuard: CanActivateFn = () => {
  const isValidToken = inject(TokenService).isValidRefreshToken();
  const router = inject(Router);

  if (isValidToken) {
    router.navigate(['/app']);
  }
  return true;
};

import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TokenService } from '@services/token.service';
import { Router } from '@angular/router';

export const redirectGuard: CanActivateFn = () => {
  const token = inject(TokenService).getToken();
  const router = inject(Router);

  if (token) {
    router.navigate(['/app']);
  }
  return true;
};

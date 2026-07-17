import { HttpInterceptorFn } from '@angular/common/http';

export const intercepterInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

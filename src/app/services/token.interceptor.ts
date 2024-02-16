import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
//   const toExclude = '/login';
//   const authService = inject(AuthService);
//   if (req.url.search(toExclude) === -1) {
//     let jwt = authService.getToken();
//     let reqWithToken = req.clone({
//       setHeaders: { Authorization: 'Bearer ' + jwt },
//     });
//     return next(reqWithToken);
//   }
//   return next(req);
// };

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  exclude_array: string[] = ['/login', '/register', '/verifyEmail'];

  constructor(private authService: AuthService) {}

  toExclude(url: string) {
    var length = this.exclude_array.length;
    for (var i = 0; i < length; i++) {
      if (url.search(this.exclude_array[i]) != -1) return true;
    }
    return false;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //tester s'il sagit de login, on n'ajoute pas le header Authorization
    //puisqu'on a pas encode de JWT (il est null)
    if (!this.toExclude(request.url)) {
      let jwt = this.authService.getToken();
      let reqWithToken = request.clone({
        setHeaders: { Authorization: 'Bearer ' + jwt },
      });
      return next.handle(reqWithToken);
    }
    return next.handle(request);
  }
}

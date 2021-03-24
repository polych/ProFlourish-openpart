import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { Role } from '../_models/role';

const users = [
  {
    id: 1,
    email: 'admin@mail.com',
    password: 'admin111',
    firstName: 'Admin',
    lastName: 'User',
    role: Role.Admin,
  },
  {
    id: 2,
    email: 'candidate@mail.com',
    password: 'candidate1',
    firstName: 'Candidate',
    lastName: 'candidate',
    role: Role.Candidate,
  },
  {
    id: 3,
    email: 'client@mail.com',
    password: 'client11',
    firstName: 'Client',
    lastName: 'User',
    role: Role.Client,
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    return handleRoute();
    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { email, password } = body;
      const user = users.find(
        (x) => x.email === email && x.password === password
      );
      if (!user) return error('email or password is incorrect');
      return ok({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        token: `fake-jwt-token.${user.id}`,
      });
    }

    // helper functions

    function ok(body: any) {
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500)); // delay observable to simulate server api call
    }

    function error(message: any) {
      return throwError({ status: 400, error: { message } }).pipe(
        materialize(),
        delay(500),
        dematerialize()
      );
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};

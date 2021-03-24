import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const user = this.auth.userValue;
        if (user) {
            if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/auth', {outlets:{auth:'login'}}]);
        return false;
    }
}

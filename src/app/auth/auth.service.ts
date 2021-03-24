import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<User>;
  public forgotPasswordEmail: string = '';
  // public user: any = null;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(`${environment.apiUrl}/users/authenticate`, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['']);
  }

  // register(formGroup: FormGroup, role: string) {
  //   let user: signUpUser;
  //   formGroup.valueChanges.subscribe(data => {
  //     let pass;
  //     if (data.password == data.password2) {
  //       pass = data.password
  //     }
  //     user.email = data.email;
  //     user.privacy = data.privacy;
  //     user.password = pass;
  //   })
  //   console.log('user', user!)
  // }
}
export class signUpUser {
  email!: string;
  password!: string;
  privacy!: boolean;
  role!: string;
}
// export class User {
//   id?: string;
//   username?: string;
//   password?: string;
//   firstName?: string;
//   lastName?: string;
//   token?: string;
// }

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Role } from 'src/app/_models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('userEmail', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  public loginForm!: FormGroup;
  public isSubmitted: boolean = false;
  public error = '';
  public loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) {
    if (this.authService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        {
          validators: [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
          updateOn: 'blur',
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required, Validators.minLength(8)],
        },
      ],
      rememberMe: [false],
    });
  }
  forgotPass(email: string) {
    this.authService.forgotPasswordEmail = email;
    this.router.navigate(['auth/', { outlets: { auth: 'forgot-password' } }]);
  }
  // login() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.getRawValue());
  //     this.isSubmitted = false;
  //   } else {
  //     this.isSubmitted = true;
  //   }
  // }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService
      .login(this.formControls.email.value, this.formControls.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log(this.authService.userValue.role);
          if (this.authService.userValue.role === Role.Client) {
            this.router.navigate(['/client', {outlets: {client:'dashboard'}}]);
          } else if (this.authService.userValue.role === Role.Candidate) {
            this.router.navigate(['/candidate', {outlets: {candidate:'dashboard'}}]);
          }
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
  }
}

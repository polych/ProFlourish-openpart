import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @ViewChild('userEmail', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }
  public isSubmitted = false;
  public userType: string = 'seeker';
  public signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [
        '',
        {
          validators: [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
          updateOn: 'submit',
        },
      ],
      name: [
        '',
        {
          validators: [
            Validators.required,
            Validators.pattern(
              "^[A-Z][-'a-zA-Z]+$"
            ),
          ],
          updateOn: 'submit',
        },
      ],
      password: [
        '',
        {
          validators: [
            Validators.minLength(6),
            Validators.required,
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'
            ),
          ],
          updateOn: 'blur',
        },
      ],
      password2: [
        '',
        {
          validators: [
            Validators.minLength(6),
            Validators.required,
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'
            ),
          ],
          updateOn: 'blur',
        },
      ],
      privacy: [
        false,
        {
          validators: [Validators.required],
          updateOn: 'submit',
        },
      ],
      news: [
        false,
        {
          validators: [Validators.required],
          updateOn: 'submit',
        },
      ],
    });
  }
  get getFormValue() {
    return this.signUpForm.getRawValue();
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('getformValue', this.getFormValue);
      this.isSubmitted = false;

    } else {
      this.isSubmitted = true;

    }

    // this.authService.register(this.signUpForm, this.userType)
  }
}

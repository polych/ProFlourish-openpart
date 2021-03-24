import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
})
export class ForgotPassComponent implements OnInit, OnDestroy {
  private forgot: any;
  public grats = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public _location: Location
  ) {}

  ngOnInit(): void {
    if (this.grats) {
      this.forgot = document.getElementById('forgot');
      this.forgot.value = this.authService.forgotPasswordEmail;
    }
  }
  onSubmit() {
    this.grats = true;
  }
  toLogin() {
    this._location.back();
    this.grats = false;
  }
  ngOnDestroy() {
    this.grats = false;
  }
}

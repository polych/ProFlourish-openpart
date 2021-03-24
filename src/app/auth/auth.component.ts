import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  private routePosition: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}
  getRoute(): boolean {
    if (this.router.url == '/auth/(auth:login)') {
      this.routePosition = true;
    } else {
      this.routePosition = false
    }
    return this.routePosition;
  }
}

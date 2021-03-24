import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.scss'],
})
export class WelcomeBannerComponent implements OnInit {
  @Input() wcBanner: any;
  public childRoute = false;

  private blockColor: string = '#EAECFB';

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    if ((this.route.snapshot.url[0] !== undefined) && (this.route.snapshot.url[0].path == 'done-for-hiring')) {
      this.childRoute = !this.childRoute
    }
  }

  getColor() {
    return this.blockColor;
  }
}

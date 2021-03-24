import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CandidateService } from 'src/app/candidate/candidate.service';
import { User } from 'src/app/_models/user';
import { Role } from 'src/app/_models/role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public user!: User;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public cServ: CandidateService,
    public auth: AuthService
  ) {
    auth.user.subscribe((user) => (this.user = user));
  }
  get userRole(): string | undefined {
    if (this.user) {
      switch (true) {
        case this.user.role === Role.Admin:
          return 'admin';
        case this.user.role === Role.Candidate:
          return 'candidate';
        case this.user.role === Role.Client:
          return 'client';
        default:
          return undefined;
      }
    }
    return undefined;
  }

  logout() {
    this.auth.logout();
  }
}

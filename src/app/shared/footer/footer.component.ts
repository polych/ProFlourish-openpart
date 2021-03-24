import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}
  marketing(): boolean {
    let pathArr = ['candidate', 'client', 'create-resume', 'thank-you'];
    let a = true;
    if (this.route.snapshot.url.length > 0) {
      pathArr.forEach(path => {
        if (this.route.snapshot.url[0].path == path) {
          a = false
        }
      });
    }
    return a;
  }
}

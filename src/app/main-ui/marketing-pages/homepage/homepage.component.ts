import { Component, Input, OnInit } from '@angular/core';
import { HomePageDummy } from 'src/app/dummy-data/home-page';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public homeDummy: HomePageDummy
  ) {
  }

  ngOnInit(): void {
  }

}

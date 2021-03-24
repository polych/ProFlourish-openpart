import { Component, OnInit } from '@angular/core';
import { MsmDummy } from 'src/app/dummy-data/msm-page';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  constructor(public MsmDummy: MsmDummy) { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-banner',
  templateUrl: './arrow-banner.component.html',
  styleUrls: ['./arrow-banner.component.scss']
})
export class ArrowBannerComponent implements OnInit {

  @Input() arrBanner: any;

  constructor() { }

  ngOnInit(): void {
  }

}

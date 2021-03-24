import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buss-list',
  templateUrl: './buss-list.component.html',
  styleUrls: ['./buss-list.component.scss']
})
export class BussListComponent implements OnInit {

  @Input() bussList: any;

  constructor() { }

  ngOnInit(): void {
  }

}

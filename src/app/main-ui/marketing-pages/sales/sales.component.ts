import { Component, OnInit } from '@angular/core';
import { SalesDummy } from 'src/app/dummy-data/sales-page';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(public salesDummy: SalesDummy) { }

  ngOnInit(): void {
  }

}

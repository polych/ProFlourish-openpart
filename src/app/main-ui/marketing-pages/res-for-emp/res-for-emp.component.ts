import { Component, OnInit } from '@angular/core';
import { RfeDummy } from 'src/app/dummy-data/rfe-page';

@Component({
  selector: 'app-res-for-emp',
  templateUrl: './res-for-emp.component.html',
  styleUrls: ['./res-for-emp.component.scss']
})
export class ResForEmpComponent implements OnInit {

  constructor(public rfeDummy: RfeDummy) { }

  ngOnInit(): void {
  }

}

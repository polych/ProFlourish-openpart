import { Component, OnInit } from '@angular/core';
import { DfhDummy } from 'src/app/dummy-data/dfh-page';

@Component({
  selector: 'app-done-for-hiring',
  templateUrl: './done-for-hiring.component.html',
  styleUrls: ['./done-for-hiring.component.scss']
})
export class DoneForHiringComponent implements OnInit {

  constructor(public dfhDummy: DfhDummy) { }

  ngOnInit(): void {
  }

}

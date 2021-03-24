import { Component, OnInit } from '@angular/core';
import { OperationsDummy } from 'src/app/dummy-data/operations';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  constructor(public oprDummy: OperationsDummy) { }

  ngOnInit(): void {
  }

}

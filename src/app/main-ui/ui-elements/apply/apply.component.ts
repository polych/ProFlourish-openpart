import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  @Input() apply: any;

  constructor() { }

  ngOnInit(): void {
  }

}

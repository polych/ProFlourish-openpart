import { Component, OnInit } from '@angular/core';
import { EdidDummy } from 'src/app/dummy-data/edid';

@Component({
  selector: 'app-edid',
  templateUrl: './edid.component.html',
  styleUrls: ['./edid.component.scss']
})
export class EdidComponent implements OnInit {

  constructor(public edidDummy: EdidDummy) { }

  ngOnInit(): void {
  }

}

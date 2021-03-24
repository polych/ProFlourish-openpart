import { Component, OnInit } from '@angular/core';
import { CscpdDummy } from 'src/app/dummy-data/cscpd-page';

@Component({
  selector: 'app-client-suc-coach-program',
  templateUrl: './client-suc-coach-program.component.html',
  styleUrls: ['./client-suc-coach-program.component.scss']
})
export class ClientSucCoachProgramComponent implements OnInit {

  constructor(
    public cscpdDummy: CscpdDummy
  ) { }

  ngOnInit(): void {
  }

}

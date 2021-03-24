import { Component, OnInit } from '@angular/core';
import { LeadershipDummy } from 'src/app/dummy-data/leadership';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {

  constructor(public leadershipDummy: LeadershipDummy) { }

  ngOnInit(): void {
  }

}

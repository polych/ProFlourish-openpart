import { Component, OnInit } from '@angular/core';
import { RfsDummy } from 'src/app/dummy-data/rfs-page';

@Component({
  selector: 'app-res-for-seek',
  templateUrl: './res-for-seek.component.html',
  styleUrls: ['./res-for-seek.component.scss']
})
export class ResForSeekComponent implements OnInit {

  constructor(public rfsDummy: RfsDummy) { }

  ngOnInit(): void {
  }

}

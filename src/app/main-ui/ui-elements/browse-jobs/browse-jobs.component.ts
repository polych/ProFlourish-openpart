import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-jobs',
  templateUrl: './browse-jobs.component.html',
  styleUrls: ['./browse-jobs.component.scss']
})
export class BrowseJobsComponent implements OnInit {

  @Input() jobList!: _jobList;

  constructor(
  ) { }

  ngOnInit(): void {
  }


}
interface _Job {
  title: string,
  desc: string,
  new: boolean,
  provider: string,
  website: string,
  added: string,
  imgUrl: string
}
interface _jobList {
  title: string,
  jobs: _Job[],
}

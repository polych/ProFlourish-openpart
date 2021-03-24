import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Job, JobsService } from 'src/app/_services/jobs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  public jobs!: Job[];
  constructor(public _location: Location, private jobsServ: JobsService) {}

  ngOnInit(): void {
    this.getJobsList()
  }

  getJobsList (): void {
    this.jobsServ.getJobs().subscribe((jobs: Job[]) => (this.jobs = jobs));
  }
}

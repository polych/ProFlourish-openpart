import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job, JobsService } from 'src/app/_services/jobs.service';
import { ModalService } from 'src/app/interceptors/modal.service';
import { ApplyModalComponent } from '../apply-modal/apply-modal.component';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  id!: number;
  job!: Job | undefined;
  public jobs!: Job[];

  constructor(
    private activateRoute: ActivatedRoute,
    public _location: Location,
    private jobsServ: JobsService,
    public mService: ModalService
  ) {}
  ngOnInit(): void {
    this.getJob();
    this.getJobsList();
  }

  getJob(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.jobsServ.getJobs().subscribe((data: Job[]) => {
      this.job = data.find((job) => (job.id = this.id));
    });
  }

  getJobsList(): void {
    this.jobsServ.getJobs().subscribe((jobs: Job[]) => (this.jobs = jobs));
  }
  openModal() {
    this.mService.openModal(ApplyModalComponent);
  }

  closeModal() {
    this.mService.closeModal();
  }
}

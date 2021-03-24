import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from '../_helpers/http-error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private readonly BASE_URL = './assets/MOCK_DATA.json';
  private handleError: HandleError;
  private modals: any[] = [];

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET jobs from the server */
  getJobs(): Observable<Job[]> {
    return this.http
      .get<Job[]>(this.BASE_URL)
      .pipe(catchError(this.handleError('getJobs', [])));
  }

  /** apply modals */
  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  open(id: string) {
    // open modal specified by id
    const modal = this.modals.find((x) => x.id === id);
    modal.open();
  }

  close(id: string) {
    // close modal specified by id
    const modal = this.modals.find((x) => x.id === id);
    modal.close();
  }
}

export interface Job {
  id: number;
  job_title: string;
  company: string;
  salary: string;
  desc: string;
  city: string;
  department: string;
  humans: number;
  comp_desc: string;
  work_time: string;
  image: string;
  street: string;
  added: Date;
}

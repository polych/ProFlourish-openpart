import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-interested',
  templateUrl: './interested.component.html',
  styleUrls: ['./interested.component.scss'],
})
export class InterestedComponent implements OnInit {

  public buttonsArr!: Array<item>;
  public buttons: Array<item> = [
    {
      title: 'Leadership',
      color: 'rgba(209,234,255,1)',
      img: '/assets/icons/itd-lds.svg',
      url: 'leadership',
    },
    {
      title: 'Client Success & Coaching & Program Delivery',
      color: 'rgba(246,234,251,1)',
      img: '/assets/icons/itd-cscpd.svg',
      url: 'client-success',
    },
    {
      title: 'Marketing & Social Media',
      color: 'rgba(249,242,233,1)',
      img: '/assets/icons/itd-msm.svg',
      url: 'marketing',
    },
    {
      title: 'Education & Instructional Design & eLearning',
      color: 'rgba(228,238,255,1)',
      img: '/assets/icons/itd-eide.svg',
      url: 'elearning',
    },
    {
      title: 'Sales',
      color: 'rgba(249,242,233,0.7)',
      img: '/assets/icons/itd-sales.svg',
      url: 'sales',
    },
    {
      title: 'Operations',
      color: 'rgba(209,234,255,1)',
      img: '/assets/icons/itd-operations.svg',
      url: 'operations',
    },
    {
      title: 'Virtual Assistant & Administration',
      color: 'rgba(246,234,251,1)',
      img: '/assets/icons/itd-vsa.svg',
      url: 'administration',
    },
  ];

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.buttonsArr = this.getButtons()
  }
  getButtons(): Array<item> {
    let i = this.buttons.filter(data => data.url !== this.route.snapshot.url[0].path );
    return i;
  }
}

interface item {
  title: string;
  color: string;
  img: string;
  url: string;
}

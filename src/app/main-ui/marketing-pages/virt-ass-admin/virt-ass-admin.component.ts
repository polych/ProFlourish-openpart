import { Component, Input, OnInit } from '@angular/core';
import { VsaDummy } from 'src/app/dummy-data/vsa-page';

@Component({
  selector: 'app-virt-ass-admin',
  templateUrl: './virt-ass-admin.component.html',
  styleUrls: ['./virt-ass-admin.component.scss']
})
export class VirtAssAdminComponent implements OnInit {


  constructor(
    public vsaDummy: VsaDummy
  ) { }

  ngOnInit(): void {
  }

}

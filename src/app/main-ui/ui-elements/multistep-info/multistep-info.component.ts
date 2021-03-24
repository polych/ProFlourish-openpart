import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multistep-info',
  templateUrl: './multistep-info.component.html',
  styleUrls: ['./multistep-info.component.scss']
})
export class MultistepInfoComponent implements OnInit {

  @Input() mlsInfo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
interface _mlsInfo {
  title: string,
  desc: string,
  bgColor: string,
  hbgColor: string,
  img: string,
  listTitleWidth: string,
  listTitle:string,
  descColor: string,
  listdisc: string,
  list: _mlsInfoList[]
}
interface _mlsInfoList {
  mlsVsa: boolean,
  direction: string,
  bgColor: string,
  margin: string,
  padding: string,
  title: string,
  desc: string,
  subtitle: string,
  img: string,
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {

  @Input() skillSet: any;

  constructor() { }

  ngOnInit(): void {
  }

}

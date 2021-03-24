import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'apply-modal-compleate',
  templateUrl: './apply-modal-compleate.component.html',
  styleUrls: ['./apply-modal-compleate.component.scss']
})
export class ApplyModalCompleateComponent implements OnInit {

  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  close_Modal():void{
    this.closeModal.emit()
  }

}

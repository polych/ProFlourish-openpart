import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'myselect',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {


  @Input() title!: string | null;
  @Input() selectItems!: any;
  @Input() selected!: string | null;
  @Output() selectedChange = new Subject<string | null>();
  @Input() label!: string | null;
  @Input() placeHolder!: string | null;

  selectedTitle!: string | null;
  public _active = false;
  constructor() {}

  setSelected(event:MouseEvent){
    if ((<HTMLElement>event.target).id == 'selectedItem') {
      let a = (<HTMLElement>event.target).textContent;
      if (this.selected != null || String && undefined) {
        this.selectedChange.next(this.selected);
        this.active()
        this.selectedTitle = this.selected;
      } else {
        this.selectedChange.next(a);
        this.active()
        this.selectedTitle = a;
      }
    }
  }
  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    if ((<HTMLElement>event.target).id !== 'select') {
      this._active = false;
    }
  }

  active() {
    this._active = !this._active;
  }

}

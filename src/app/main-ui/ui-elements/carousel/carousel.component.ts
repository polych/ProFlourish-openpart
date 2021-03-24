import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('1s linear', style({ opacity: '1' })),
      ]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() cData!: Array<{title: string, part: string}>;

  private _cData!: Array<{title: string, part: string}>;
  public currentTiles: any = [];
  public range: number = 0;
  public tilesArr: any = [];

  constructor(
  ) {
   }

  ngOnInit(): void {
    this._cData = [...this.cData];
    while (this._cData.length > 0) {
      this.tilesArr.push(this._cData.splice(0, 3));
    }
    this.currentTiles = this.tilesArr[this.range];
  }


  onPreviousClickTile() {
    const previous = this.range -1;
    this.currentTiles = this.tilesArr[this.range];
    this.range = previous < 0 ? this.tilesArr.length - 1 : previous;
  }

  onNextClickTile() {
    const next = this.range + 1;
    this.currentTiles = this.tilesArr[this.range];
    this.range = next === this.tilesArr.length ? 0 : next;
  }
  onPaginClick(i: number) {
    this.range = i;
    this.currentTiles = this.tilesArr[this.range];
  }

}




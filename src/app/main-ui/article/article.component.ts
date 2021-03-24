import { Component, HostListener, OnInit } from '@angular/core';
import { ArticleDummy } from 'src/app/dummy-data/article-page';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],

})
export class ArticleComponent implements OnInit {

  constructor(public artDummy: ArticleDummy) {

  }

  public scrollPercent!: string;

  ngOnInit(): void {

  }
  scroll(){
    const scroller = document.getElementById('articleText');
    const height = scroller!.clientHeight;
    const scrollHeight = scroller!.scrollHeight - height;
    const scrollTop = scroller!.scrollTop;
    const sclollpercent = Math.floor((scrollTop / scrollHeight) * 100);
    document.getElementById('done')!.setAttribute(
      'style',
      `background:linear-gradient(90deg, #EC5B60 ${sclollpercent}%, #f9f2e9 ${sclollpercent}%)`
    );
  }


}

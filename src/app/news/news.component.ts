import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import {INews} from './news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers:[NewsService]
})
export class NewsComponent implements OnInit {

  newsList:INews[] = [];
  selectedNews;
  isDialogOPen: boolean = false;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.collectNewsList();
  }

  collectNewsList() {
    this.newsService.getNewsList().subscribe((res: INews[]) => {
      this.newsList = res;
    })
  }

  showMore(news) {
    this.selectedNews = news;
    this.isDialogOPen = true;
  }

}

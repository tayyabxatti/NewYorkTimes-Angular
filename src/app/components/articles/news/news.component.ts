import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { NewsResponse } from 'src/app/classes/articles';
import {ArticleService} from '../../../services/article.service';
import {MatDialog} from "@angular/material/dialog";
import { DetailNewsComponent } from '../detail-news/detail-news.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  private routeSub: Subscription;
  news_category:string;
  obj_news_response:NewsResponse;
  constructor(private route: ActivatedRoute,private articlesService:ArticleService,public dialog: MatDialog) {
   }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.news_category=params['id'];
    this.getNews(this.news_category);

    });
    // this.getNews(this.news_category);
  }

  getNews(news_category){
    this.obj_news_response=new NewsResponse();
     this.articlesService.getArticles(news_category).subscribe(data=>{
      this.obj_news_response=data;
     })
  }
  loadDetails(item:any){
    console.log(item);
    const dialogRef = this.dialog.open(DetailNewsComponent, {
      height: '600px',
      width: '900px',
      data: item,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

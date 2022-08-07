import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MatCardModule} from "@angular/material/card";
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [ArticlesComponent, NavigationBarComponent, SearchComponent, NewsComponent, DetailNewsComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatCarouselModule.forRoot()

  ]
})
export class ArticlesModule { }

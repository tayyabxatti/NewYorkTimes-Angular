import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Articles, SearchFilters } from 'src/app/classes/articles';
import { ArticleService } from 'src/app/services/article.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filterForm: FormGroup;
  searchResponse:Articles[];
  dataSource:Articles[];
  length: number = 0;
  pageIndex: number | undefined = 1;
  pageSize: number | undefined = 6;
  previous: number | undefined = 0;
  constructor(private formBuilder: FormBuilder,private articleService:ArticleService) {
    this.filterForm = this.formBuilder.group({
      begin_Date: [''],
      end_Date: [''],
      facet: [''],
      facet_Fields: [''],
      facet_Filter: [''],
      fl: [''],
      fq: [''],
      page: 0,
      q: [''],
      sort: [''],
    });
   }

  ngOnInit(): void {
  }
  onSearchArticles(filterForm: FormGroup) {

    if (filterForm.invalid) {
      return;
    }

    let searchFilters: SearchFilters = {
      begin_date: filterForm.value.begin_Date,
      end_date: filterForm.value.end_Date,
      facet: filterForm.value.facet,
      facet_fields: filterForm.value.facet_Fields,
      facet_filter: filterForm.value.facet_Filter,
      fl: filterForm.value.fl,
      fq: filterForm.value.fq,
      page: +(filterForm.value.page),
      q: filterForm.value.q,
      sort: filterForm.value.sort
    };
    this.articleService.searchArticles(searchFilters).subscribe(data=>{
      this.length = data.response.docs.length;
      this.searchResponse = data.response.docs;
      this.getServerData({
        length: this.length,
        pageIndex: 0,
        pageSize: 6,
        previousPageIndex: this.previous
      });
    });
    // this.onSearchSubmit.emit(searchFilters);
  }

  public getServerData(event: PageEvent) {
    if (event.pageIndex == 0)
      this.dataSource = this.searchResponse.slice(0, event.pageSize);
    else
      this.dataSource = this.searchResponse.slice((event.pageIndex * event.pageSize), (event.pageIndex + 1) * event.pageSize);
    this.pageIndex = event?.pageIndex;
    this.pageSize = event?.pageSize;
    this.previous = event?.previousPageIndex;

    return event;
  }

  resetForm() {
    let searchFilters: SearchFilters = {
      begin_date: '',
      end_date: '',
      facet: '',
      facet_fields: '',
      facet_filter: '',
      fl: '',
      fq: '',
      page: 0,
      q: '',
      sort: ''
    };
    this.searchResponse = [];

    this.filterForm.reset();
    // this.onSearchSubmit.emit(searchFilters);
  }
  // openDialog(article:any){
  //   const dialogRef = this.dialog.open(SearchCardsDetailsComponent, {
  //     height: '600px',
  //     width: '900px',
  //     data: article,
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });

  // }
}

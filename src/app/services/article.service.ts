import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesResponse, SearchFilters } from '../classes/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  article_API_KEY:string="WV4KDvGcFYI19GayAafJW8p1oJ0E7uGA";
  top_science_stories_API:string='https://api.nytimes.com/svc/topstories/v2/science.json?api-key='+this.article_API_KEY;
  top_world_stories_API:string='https://api.nytimes.com/svc/topstories/v2/world.json?api-key='+this.article_API_KEY;;
  search_API:string= 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  constructor(private http: HttpClient) { }

  getArticles(data:any):Observable<any>
  {
    if(data=="world"){
      return this.http.get<any>(this.top_world_stories_API)

    }else{
      return this.http.get<any>(this.top_science_stories_API)
    }
  }

  searchArticles(filters: SearchFilters): Observable<ArticlesResponse> {
    let apiUrl = this.search_API;
    let apiKey = this.article_API_KEY;
    let query = '';

    if (filters.begin_date)
      query += `begin_date=${filters.begin_date}&`;

    if (filters.end_date)
      query += `end_date=${filters.end_date}&`;

    if (filters.facet)
      query += `facet=${filters.facet}&`;

    if (filters.facet_fields)
      query += `facet_fields=${filters.facet_fields}&`;

    if (filters.facet_filter)
      query += `facet_filter=${filters.facet_filter}&`;

    if (filters.fl)
      query += `fl=${filters.fl}&`;

    if (filters.fq)
      query += `fq=${filters.fq}&`;

    if (filters.page && filters.page != 0)
      query += `page=${filters.page}&`;

    if (filters.q)
      query += `q=${filters.q}&`;

    if (filters.sort)
      query += `sort=${filters.sort}&`;

    apiUrl = `${apiUrl}?${query}api-key=${apiKey}`;
    return this.http.get<ArticlesResponse>(apiUrl);
  }
}

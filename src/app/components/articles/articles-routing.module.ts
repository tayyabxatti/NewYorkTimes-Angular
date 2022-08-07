import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',
  component:ArticlesComponent,
  children:[
  {
    path:'',
    redirectTo:'news/world',
    pathMatch:'full'
  },
  {
    path:'news/:id',
    component:NewsComponent
  },
  {
    path:'search',
    component:SearchComponent
  }
]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }

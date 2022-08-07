import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  navigateTo(category:string){
    if(category=='world'){
      this.router.navigate(['dashboard/news/world']);
    }else if(category=='science'){
    this.router.navigate(['dashboard/news/science']);
    }else if(category=='search'){
    this.router.navigate(['dashboard/search']);
    }
   
  }
}

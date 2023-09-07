import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model:any ={};
  
  title ="Dating App";
  
  constructor(public accountService:AccountService){ }
  ngOnInit(): void {
    
  }
  
  login(){
    this.accountService.login(this.model).subscribe({
      next: (response:User) => {
        console.log(response);
       
      },
      error: error=>{ console.log(error);},
      complete : () =>{ console.log("request completed"); }
    })
  }
  logout(){
    this.accountService.logout();
  }
}

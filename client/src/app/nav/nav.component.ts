import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model:any ={};
  
  title ="Dating App";
  
  constructor(public accountService:AccountService,private router:Router){ }
  ngOnInit(): void {
    
  }
  
  login(){
    this.accountService.login(this.model).subscribe({
      next: (response:User) => {
        console.log(response);
        this.router.navigateByUrl('/members');
       
      },
      error: error=>{ console.log(error);},
      complete : () =>{ console.log("request completed"); }
    })
  }
  logout(){
    this.router.navigateByUrl('/');
    this.accountService.logout();
  }
}

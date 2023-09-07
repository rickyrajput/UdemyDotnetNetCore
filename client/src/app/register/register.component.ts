import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
model:any={};
@Output() cancelRegister = new EventEmitter();

constructor(private accountService:AccountService){}

  register(){
    this.accountService.register(this.model).subscribe({
      next:()=>{ this.cancel();},
      error:(err)=>{console.log(err);},
      complete:()=>{ console.log('request completed');}
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
}

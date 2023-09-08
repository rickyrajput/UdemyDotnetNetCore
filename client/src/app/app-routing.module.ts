import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'',runGuardsAndResolvers:'always',canActivate:[authGuard],
  children:[
    {path:'members',component:MemberListComponent, canActivate:[authGuard]},
    {path:'member/:id',component:MemberDetailComponent},
    {path:'messages',component:MessagesComponent},
    {path:'list',component:ListsComponent}
  ]
  },
  {path:'**',component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

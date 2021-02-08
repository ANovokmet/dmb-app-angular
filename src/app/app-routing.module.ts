import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: UserListComponent
  },
  {
    path: ':login', component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

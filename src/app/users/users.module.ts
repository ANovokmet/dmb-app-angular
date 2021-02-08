import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule
  ]
})
export class UsersModule { }

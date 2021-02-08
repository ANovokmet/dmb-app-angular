import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListGroupComponent } from './user-list-group/user-list-group.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [UserListGroupComponent, PaginationComponent, SearchComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginationComponent,
    UserListGroupComponent,
    SearchComponent,
    LoaderComponent
  ]
})
export class SharedModule { }

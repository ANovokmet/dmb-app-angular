import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { UsersService } from './api/users.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [UsersService],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }

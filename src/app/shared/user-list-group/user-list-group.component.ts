import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-list-group',
  templateUrl: './user-list-group.component.html',
  styleUrls: ['./user-list-group.component.scss']
})
export class UserListGroupComponent implements OnInit {

  @Input()
  public data: User[];

  constructor() { }

  ngOnInit(): void {
  }

}

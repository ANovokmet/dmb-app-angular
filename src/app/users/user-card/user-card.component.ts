import { Component, Input, OnInit } from '@angular/core';
import { UserDetail } from '@core/models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input()
  data: UserDetail;

  constructor() { }

  ngOnInit(): void {
  }

}

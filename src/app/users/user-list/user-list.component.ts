import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@store';
import { loadUsers } from '@store/user/user.actions';
import { selectUsersData, selectUsersLoading, selectUsersPage, selectUsersQuery, selectUsersTotalPages } from '@store/user/user.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$ = this.store$.select(selectUsersData);
  usersLoading$ = this.store$.select(selectUsersLoading);
  total$ = this.store$.select(selectUsersTotalPages);
  page$ = this.store$.select(selectUsersPage);
  query$ = this.store$.select(selectUsersQuery);
  loading$ = this.store$.select(selectUsersLoading);

  constructor(private store$: Store<State>) {
  }

  ngOnInit(): void {
  }

  onSearch(query: string): void {
    this.store$.dispatch(loadUsers({ query, page: 0 }));
  }

  onPageSelect(page: number): void {
    this.store$.dispatch(loadUsers({ page }));
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { State } from '@store';
import { loadFollowers, loadUser } from '@store/user.actions';
import * as selectors from '@store/user.selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user$ = this.store$.select(selectors.selectUserData);
  userLoading$ = this.store$.select(selectors.selectUsersLoading);



  followers$ = this.store$.select(selectors.selectFollowersData);
  followersPage$ = this.store$.select(selectors.selectFollowersPage);
  followersLoading$ = this.store$.select(selectors.selectFollowersLoading);
  followersTotal$ = this.store$.select(selectors.selectFollowersTotalPages);

  constructor(private store$: Store<State>, private route: ActivatedRoute) {
    route.params.pipe(map(p => p.login)).subscribe(login => {
      store$.dispatch(loadUser({ login }));
      store$.dispatch(loadFollowers({ login, page: 0 }));
    });
  }

  ngOnInit(): void {
  }

  onPageSelect(page: number): void {
    this.store$.dispatch(loadFollowers({ page }));
  }
}

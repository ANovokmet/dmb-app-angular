import { Injectable } from '@angular/core';
import { UsersService } from '@core/api/users.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as actions from './user.actions';
import { State } from '.';
import { selectFollowersPage, selectUsersPage, selectUsersQuery } from './user.selectors';


@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUsers),
      withLatestFrom(this.store$.select(selectUsersPage), this.store$.select(selectUsersQuery)),
      map(([action, usersPage, query]) => ({usersPage, query, ...action})),
      switchMap(data =>
        this.users.searchUsers(data.query, data.usersPage + 1).pipe(
          map(response => actions.loadUsersSuccess({ data: response.items, total: response.total_count })),
          catchError(error => of(actions.loadUsersFailure({ error })))
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUser),
      switchMap(action =>
        this.users.getUser(action.login).pipe(
          map(response => actions.loadUserSuccess({ data: response })),
          catchError(error => of(actions.loadUserFailure({ error })))
        )
      )
    )
  );

  loadFollowers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadFollowers),
      withLatestFrom(this.store$.select(selectFollowersPage)),
      map(([action, page]) => ({page, ...action})),
      switchMap(data =>
        this.users.getUserFollowers(data.login, data.page).pipe(
          map(response => actions.loadFollowersSuccess({ data: response })),
          catchError(error => of(actions.loadFollowersFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private users: UsersService, private store$: Store<State>) { }

}

import { Injectable } from '@angular/core';
import { UsersService } from '@core/api/users.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as actions from './user.actions';
import { State } from '..';
import { selectUsersPage, selectUsersQuery } from './user.selectors';

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUsers),
      withLatestFrom(this.store$.select(selectUsersPage), this.store$.select(selectUsersQuery)),
      map(([action, page, query]) => ({ page, query, ...action })),
      switchMap(data =>
        data.query ?
          this.users.searchUsers(data.query, data.page + 1).pipe(
            map(response => actions.loadUsersSuccess({ data: response.items, total: response.total_count })),
            catchError(error => of(actions.loadUsersFailure({ error })))
          )
          :
          of(actions.loadUsersSuccess({ data: null, total: 0 }))
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
      switchMap(data =>
        this.users.getUserFollowers(data.login, data.page + 1).pipe(
          map(response => actions.loadFollowersSuccess({ data: response })),
          catchError(error => of(actions.loadFollowersFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private users: UsersService, private store$: Store<State>) { }

}

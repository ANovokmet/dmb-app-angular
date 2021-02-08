import { User, UserDetail } from '@core/models';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User] Load Users', props<{ query?: string, usersPage?: number }>());
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ data: User[], total: number }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());

export const loadUser = createAction('[User] Load User', props<{ login: string }>());
export const loadUserSuccess = createAction('[User] Load User Success', props<{ data: UserDetail }>());
export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: any }>());

export const loadFollowers = createAction('[User] Load Followers', props<{ login?: string, page: number }>());
export const loadFollowersSuccess = createAction('[User] Load Followers Success', props<{ data: User[] }>());
export const loadFollowersFailure = createAction('[User] Load Followers Failure', props<{ error: any }>());


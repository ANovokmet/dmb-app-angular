import { createReducer, on } from '@ngrx/store';

import * as actions from './user.actions';
import { User, UserDetail } from '@core/models';

export const userFeatureKey = 'user';

export interface State {
  usersData: User[];
  usersLoading: boolean;
  usersTotal: number;
  usersPage: number;
  query: string;
  userData: UserDetail;
  userLoading: boolean;
  followersData: User[];
  followersLoading: boolean;
  followersPage: number;
  error: any;
}

export const initialState: State = {
  usersData: null,
  usersLoading: false,
  usersTotal: null,
  usersPage: 0,
  query: null,
  userData: null,
  userLoading: null,
  followersData: null,
  followersPage: 0,
  followersLoading: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(actions.loadUsers, (state, action) => ({ ...state, ...action, usersLoading: true })),
  on(actions.loadUsersSuccess, (state, action) => ({
    ...state,
    usersLoading: false,
    usersTotal: action.total,
    usersData: action.data,
    error: null
  })),
  on(actions.loadUsersFailure, (state, { error }) => ({ ...state, usersLoading: false, error })),

  on(actions.loadFollowers, (state, action) => ({ ...state, followersPage: action.page, followersLoading: true })),
  on(actions.loadFollowersSuccess, (state, action) => ({
    ...state,
    followersLoading: false,
    followersData: action.data,
    error: null
  })),
  on(actions.loadFollowersFailure, (state, { error }) => ({ ...state, followersLoading: false, error })),

  on(actions.loadUser, (state, action) => ({ ...state, userLoading: true })),
  on(actions.loadUserSuccess, (state, action) => ({
    ...state,
    userLoading: false,
    userData: action.data,
    error: null
  })),
  on(actions.loadUserFailure, (state, { error }) => ({ ...state, userLoading: false, error })),
);

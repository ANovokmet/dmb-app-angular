import { createReducer, on } from '@ngrx/store';

import * as actions from './user.actions';
import { User, UserDetail } from '@core/models';
import { onLoading } from '@core/utils/state.utils';

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
  ...onLoading<State>('usersLoading', [actions.loadUsers, actions.loadUsersSuccess, actions.loadUsersFailure]),
  ...onLoading<State>('followersLoading', [actions.loadFollowers, actions.loadFollowersSuccess, actions.loadFollowersFailure]),
  ...onLoading<State>('userLoading', [actions.loadUser, actions.loadUserSuccess, actions.loadUserFailure]),
  on(actions.loadUsers, (state, action) => ({
    ...state,
    query: action.query !== undefined ? action.query : state.query,
    usersPage: action.page !== undefined ? action.page : state.usersPage
  })),
  on(actions.loadUsersSuccess, (state, action) => ({
    ...state,
    usersTotal: action.total,
    usersData: action.data,
    error: null
  })),
  on(actions.loadFollowers, (state, action) => ({
    ...state,
    followersPage: action.page
  })),
  on(actions.loadFollowersSuccess, (state, action) => ({
    ...state,
    followersData: action.data,
    error: null
  })),
  on(actions.loadUserSuccess, (state, action) => ({
    ...state,
    userData: action.data,
    error: null
  }))
);

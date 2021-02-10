import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, userFeatureKey } from './user.reducer';

export const selectFeature = (state): State => state[userFeatureKey];

export const selectError = (state) => selectFeature(state).error;

export const selectUsersQuery = (state) => selectFeature(state).query;
export const selectUsersData = (state) => selectFeature(state).usersData;
export const selectUsersLoading = (state) => selectFeature(state).usersLoading;
export const selectUsersPage = (state) => selectFeature(state).usersPage;
const selectUsersTotal = (state) => selectFeature(state).usersTotal;
export const selectUsersTotalPages = createSelector(selectUsersTotal, total => Math.ceil(total / 10));

export const selectUserData = (state) => selectFeature(state).userData;
export const selectUserLoading = (state) => selectFeature(state).userLoading;

export const selectFollowersData = (state) => selectFeature(state).followersData;
export const selectFollowersLoading = (state) => selectFeature(state).followersLoading;
export const selectFollowersTotalPages = createSelector(selectUserData, user => user && Math.ceil(user.followers / 10));
export const selectFollowersPage = createSelector(selectFeature, state => state.followersPage);

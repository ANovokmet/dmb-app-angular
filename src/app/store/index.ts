import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as user from './user.reducer';

export interface State {
  [user.userFeatureKey]: user.State;
}

export const reducers: ActionReducerMap<State> = {
  [user.userFeatureKey]: user.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

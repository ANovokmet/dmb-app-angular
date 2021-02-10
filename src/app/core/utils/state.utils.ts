import { ActionCreator, on } from '@ngrx/store';

/**
 * Generate reducer states for loading states
 * request -> loading: true, response -> loading: false
 * @param stateKey boolean state property
 * @param param1 the triplet of action creators to reduce state with: load, success, error
 */
export function onLoading<S>(stateKey, [load, success, err]: [ActionCreator, ActionCreator, ActionCreator]) {
    return [
        on<any, S>(load, (state) => ({
            ...state,
            [stateKey]: true,
            error: null
        })),
        on<any, S>(success, (state) => ({
            ...state,
            [stateKey]: false,
            error: null
        })),
        on<any, S>(err, (state, { error }) => ({
            ...state,
            [stateKey]: false,
            error
        })),
    ];
}

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromEjercicio from './ejercicio.reducer';

export interface State {
    cosa: fromEjercicio.State;
}

export const reducers: ActionReducerMap <State> = {
    cosa: fromEjercicio.cosaReducer,
};

export const getCosaState = createFeatureSelector<State>('cosa');

export * from './ejercicio.reducer';

import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import { addItem, eraseItem } from '../actions/ejercicio.actions';
import { Cosa } from '../../interfaces/interfaces';

export interface CosaState extends EntityState<Cosa>{}

export interface State{
     cosas: CosaState;
 }
export const cosaModelAdapter: EntityAdapter<Cosa> = createEntityAdapter<Cosa>({selectId: (cosa: Cosa) => cosa.creationDate.toString()});

export const initialState: State = {
     cosas: cosaModelAdapter.getInitialState()
};

// tslint:disable-next-line: variable-name
const _ejercicioReducer = createReducer(
      initialState,
      on(addItem, (state, action) => (
        {...state, cosas: {...cosaModelAdapter.addOne(action.cosa, state.cosas)}}
        )),
      on(eraseItem, (state, action) => (
        {...state, cosas: {...cosaModelAdapter.removeOne(action.fecha, state.cosas)}}
        ))
);

export const selectCosas = (state: State) => state.cosas;

// tslint:disable-next-line: typedef
export function cosaReducer(state, action) {
  return _ejercicioReducer(state, action);
}


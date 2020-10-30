import { createAction, props } from '@ngrx/store';
import { Cosa } from '../../interfaces/interfaces';

export const addItem = createAction('[App Component] AddItem', props<{cosa: Cosa}>());
export const eraseItem = createAction('[App Component] EraseItem', props<{fecha: string}>());

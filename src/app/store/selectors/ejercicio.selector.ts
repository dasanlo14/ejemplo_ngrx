import { createSelector } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as fromEjercicio from '../reducers/ejercicio.reducer';


export const selectCosasState = createSelector(
   fromRoot.getCosaState,
   (state: fromRoot.State) => state.cosa
   );

export const selectCosas2 = createSelector(
   selectCosasState,
   fromEjercicio.selectCosas,
   (state: fromEjercicio.State) => {
      return state.cosas;
   }
);

export const {selectAll: selectCosasModels} = fromRoot.cosaModelAdapter.getSelectors(selectCosas2);

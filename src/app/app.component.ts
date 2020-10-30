import { Component } from '@angular/core';
import { Cosa } from './interfaces/interfaces';
import { select, Store } from '@ngrx/store';
import { addItem, eraseItem } from './store/actions/ejercicio.actions';
import { Observable, pipe } from 'rxjs';
import * as fromEjercicio from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ejercicio';
  arrayAuxiliar: Cosa[] = [];
  arrayDeCosas$: Observable<Cosa[]> = this.store.pipe(select(fromEjercicio.selectCosasModels));


  constructor(private readonly store: Store<fromEjercicio.State>){
  }

  // tslint:disable-next-line: typedef
  addItemToList(newListItem: Cosa){
      console.log('estoy antes del if length = 0');
      this.arrayDeCosas$.subscribe(res => { this.arrayAuxiliar = res; });
      if (this.arrayAuxiliar.length !== 0){
        console.log('he entrado al if length != 0');
       // tslint:disable-next-line: one-variable-per-declaration
        const creacionAnterior = this.arrayAuxiliar[this.arrayAuxiliar.length - 1].creationDate.getTime();
        const creacionActual = newListItem.creationDate.getTime();

        const tiempoPasado: number = (creacionActual - creacionAnterior) / 1000;
        newListItem.timeDifference = tiempoPasado;
    }
    else{
      console.log('no he entrado al if length != 0');
      console.log(newListItem.name);
      newListItem.timeDifference = 0;
    }
      console.log('estoy antes del dispatch');
      this.store.dispatch( addItem({ cosa: newListItem }));
      console.log('estoy despues del dispatch');
  }

  // tslint:disable-next-line: typedef
  eraseItemList(fechaCreacion: Date){
    const fecha = fechaCreacion.toString();
    this.store.dispatch(eraseItem({fecha}));
  }
}

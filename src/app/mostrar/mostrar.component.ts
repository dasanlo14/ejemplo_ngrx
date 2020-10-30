import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cosa } from '../interfaces/interfaces';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent{

  constructor() { }

  @Input() itemList: Cosa;

  @Output() borrar = new EventEmitter<Date>();

  // tslint:disable-next-line: typedef
  eraseItemList(value: Date){
    this.borrar.emit(value);
  }
}

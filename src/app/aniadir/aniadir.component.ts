import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Cosa } from '../interfaces/interfaces';

@Component({
  selector: 'app-aniadir',
  templateUrl: './aniadir.component.html',
  styleUrls: ['./aniadir.component.css']
})
export class AniadirComponent {

  constructor() { }

  @Output() newListItemEvent = new EventEmitter<Cosa>();

  // tslint:disable-next-line: typedef
  addItemToList(value: string){
    const nuevoItem = new Cosa();
    nuevoItem.name = value;
    nuevoItem.creationDate = new Date();
    this.newListItemEvent.emit(nuevoItem);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { cosaReducer } from './store/reducers/ejercicio.reducer';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AniadirComponent } from './aniadir/aniadir.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import {reducers} from './store';

@NgModule({
  declarations: [
    AppComponent,
    AniadirComponent,
    MostrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, StoreModule.forRoot({ cosas: cosaReducer }),
    StoreModule.forFeature('cosa', reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

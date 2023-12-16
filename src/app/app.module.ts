import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchPipe } from './components/dashboard/search.pipe';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal/modal.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchPipe,
    ModalComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

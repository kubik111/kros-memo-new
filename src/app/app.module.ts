import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { SearchComponent } from './nav-container/search/search.component';
import { DetailComponent } from './detail/detail.component';
import { DatePickerComponent } from './detail/date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavContainerComponent,
    SearchComponent,
    DetailComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

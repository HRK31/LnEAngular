import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SuccessAlert } from "./successalert/successalert.component";
import { WarningAlert } from "./warningalert/warningalert.component";
import { Binding } from "./binding/binding.component";

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlert,
    Binding
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

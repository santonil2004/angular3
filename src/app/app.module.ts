import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { GreetingComponent } from './greeting/greeting.component';
import { PersonNameUppercasePipe } from './pipes/person-name-uppercase.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GreetingComponent,
    PersonNameUppercasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

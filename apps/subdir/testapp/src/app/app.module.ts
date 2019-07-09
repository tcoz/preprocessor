import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyfeatureModule } from '../myfeature/myfeature.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyfeatureModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyfeatureComponent } from './myfeature.component';

@NgModule({
  declarations: [MyfeatureComponent],
  exports: [
    MyfeatureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyfeatureModule { }

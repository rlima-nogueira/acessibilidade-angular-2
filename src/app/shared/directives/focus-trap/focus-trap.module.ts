import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapDirective } from './focus-trap.directive';




@NgModule({
  declarations: [FocusTrapDirective],
  imports: [
    CommonModule
  ],
  exports: [FocusTrapDirective]
})
export class FocusTrapModule { }

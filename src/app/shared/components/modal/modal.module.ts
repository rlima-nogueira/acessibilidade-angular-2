import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';
import { FocusTrapModule } from '../../directives/focus-trap/focus-trap.module';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FocusTrapModule
  ],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule { }

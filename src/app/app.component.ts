import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Component } from '@angular/core';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  public title = 'Acessibilidade Angular';
  public firstName = 'Rafaela';
  public modalRef: ModalRef;

  constructor(
    private modalService: ModalService
  ) {}

  public showModal(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });

  }

}

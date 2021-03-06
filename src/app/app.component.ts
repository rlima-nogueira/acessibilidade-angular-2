import { HostBinding, OnInit, ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;

  public modalRef: ModalRef;
  public infor = false;

  public form: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      idade: ['', Validators.required],
      info: [false],
    });
  }

  public showModal(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'Cadastro de pessoa'
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.modalRef.close();
    this.form.reset();
  }

}

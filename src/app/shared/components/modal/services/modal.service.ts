import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { BodyInjectorService } from 'src/app/shared/services/body-injector.service';
import { ModalConfig } from '../interfaces/modal-config';
import { ModalComponent } from '../modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
   }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();

    componentRef.instance.config = config;
    this.bodyInjector.stackBeforeAppRoot(componentRef);

    console.log('open called');
    return new ModalRef(componentRef);
  }


  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }

}

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

    public close(): void {
      console.log('close called');
      this.componentRef.destroy();
    }
}

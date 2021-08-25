import { HostListener } from '@angular/core';
import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {

  private firstFocusableElement: HTMLElement = null;
  private lastFocusableElement: HTMLElement = null;

  constructor(
    private elementRef: ElementRef<any>
  ) { }


  public ngAfterViewInit(): void {
    const focusableElement = this.elementRef
      .nativeElement
      .querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])`
      ) as Array<HTMLElement>;

    this.firstFocusableElement = focusableElement[0];
    this.lastFocusableElement = focusableElement[focusableElement.length - 1 ];
    this.firstFocusableElement.focus();
  }

  @HostListener('keydown', ['$event'])
  public manageTab(event: KeyboardEvent): void {
    if (event.key !== 'Tab') {
      return;
    }


    if (event.shiftKey && document.activeElement === this.firstFocusableElement) {
      this.lastFocusableElement.focus();
      event.preventDefault();
      return;
    }

    if (document.activeElement === this.lastFocusableElement) {
      this.firstFocusableElement.focus();
      event.preventDefault();
      return;
    }

  }
}

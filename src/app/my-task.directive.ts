import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {Task} from "./task";

@Directive({
  selector: '[appMyTask]'
})
export class MyTaskDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.innerHTML = 'conteudo inserido';
  }

  @Input()
  appMyTask: Task;

  @HostListener('click')
  onClick() {
    alert(this.appMyTask);
  }
}

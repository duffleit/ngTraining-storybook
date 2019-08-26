import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button (click)="clicked.emit()">{{label}}</button>
  `,
  styles: [
    `
      button {
        color: white;
        border: 0;
        height: 48px;
        padding: 0 30px;
        background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
        border-radius: 3px;
      }
    `
  ]
})
export class ButtonComponent {
  @Output()
  public clicked = new EventEmitter();
  @Input()
  public label: string;
}
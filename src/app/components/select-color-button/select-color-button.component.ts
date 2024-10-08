import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color } from '../../interfaces/color';

@Component({
  selector: 'app-select-color-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './select-color-button.component.html',
  styleUrl: './select-color-button.component.css'
})
export class SelectColorButtonComponent {

  @Input() color!: Color;
  @Output() onColorSelected = new EventEmitter<Color>();

  selectColor() {
    this.onColorSelected.emit(this.color);
  }

}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  @Input() color!: string;

}

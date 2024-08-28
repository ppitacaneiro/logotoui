import { Component, Input } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { Color } from '../../interfaces/color';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-date-picker',
  standalone: true,
  imports: [
    ColorPickerModule,
    CommonModule
  ],
  templateUrl: './color-date-picker.component.html',
  styleUrl: './color-date-picker.component.css'
})
export class ColorDatePickerComponent {

    @Input() color:Color = {
      hex: '#FACA15',
    };
}

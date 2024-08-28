import { Component, Output, EventEmitter } from '@angular/core';
import { extractColors } from 'extract-colors';
import { Color } from '../../interfaces/color';

@Component({
  selector: 'app-choosefile',
  standalone: true,
  imports: [],
  templateUrl: './choosefile.component.html',
  styleUrl: './choosefile.component.css'
})
export class ChooseFileComponent {

  @Output() colorsExtracted = new EventEmitter<Color[]>();

  imageSrc:string = 'yourlogo.jpg';
  colors:Color[] = [];

  onFileSelected(event:Event) {

    // TODO: validate image extensions
    
    const input = event.target as HTMLInputElement;
    if (!input.files) {
      return;
    }

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        this.imageSrc = e.target.result as string;
        this.extractColorsFromLogo(this.imageSrc);
      }
    };
    reader.readAsDataURL(file);
  }

  extractColorsFromLogo(srcImage:string) {
    extractColors(srcImage).then(colors => {
      console.log('Colors extracted', colors);
      if (!colors || colors.length === 0) {
        // TODO show error message
        console.error('No colors extracted');
        return;
      }

      if (colors.length < 3) {
        this.colors = colors;
        this.setColorsAsSelected(colors.length);
        this.colorsExtracted.emit(this.colors);
        // TODO show modal where user can select the colors
        console.error('Less than 3 colors extracted');
      }

      if (colors.length >= 3) {
        this.colors = colors;
        this.setColorsAsSelected(3);
        this.colorsExtracted.emit(this.colors);
      }
    }).catch(error => {
      console.error('Error extracting colors', error);
    });
  }

  setColorsAsSelected(numberOfColors:number) {
    for (let i = 0; i < numberOfColors; i++) {
      this.colors[i].selected = true;
    }
  }
}

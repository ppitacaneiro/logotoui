import { Component } from '@angular/core';

@Component({
  selector: 'app-choosefile',
  standalone: true,
  imports: [],
  templateUrl: './choosefile.component.html',
  styleUrl: './choosefile.component.css'
})
export class ChooseFileComponent {

  imageSrc:string = 'yourlogo.jpg';

  onFileSelected(event:Event) {

    // validate image extensions
    
    const input = event.target as HTMLInputElement;
    if (!input.files) {
      return;
    }

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target) {
        this.imageSrc = e.target.result as string;
      }
    };
    reader.readAsDataURL(file);
  }
}

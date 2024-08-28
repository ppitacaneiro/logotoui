import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite.service';
import { extractColors } from 'extract-colors';
import { ChooseFileComponent } from './components/choosefile/choosefile.component';
import { LogoComponent } from './components/logo/logo.component';
import { SelectColorButtonComponent } from './components/select-color-button/select-color-button.component';
import { CommonModule } from '@angular/common';
import { Color } from './interfaces/color';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChooseFileComponent,
    LogoComponent,
    SelectColorButtonComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title:string = 'LogoToUi - Extract colors from logo';
  src:string = 'google-logo.png';

  colors: Color[] = [
    {
      level: 'PRIMARY',
      hex: '#FACA15'
    },
    {
      level: 'SECONDARY',
      hex: '#6D2BD7'
    },
    {
      level: 'TERCIARY',
      hex: '#BE125F'
    }
  ];

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit() {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }

  extract() {
    extractColors(this.src).then(colors => {
      console.log(colors);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite.service';
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

  colors: Color[] = [
    {
      hex: '#FACA15',
      selected: true
    },
    {
      hex: '#6D2BD7',
      selected: true
    },
    {
      hex: '#BE125F',
      selected: true
    }
  ];

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit() {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }

  get gradient() {
    return {
      'background': `linear-gradient(90deg, ${this.colors[1].hex}, ${this.colors[2].hex})`
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite.service';
import { extractColors } from 'extract-colors';
import { ChooseFileComponent } from './components/choosefile/choosefile.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChooseFileComponent,
    LogoComponent,
    HeroSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title:string = 'logotoui';
  src:string = 'google-logo.png';

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

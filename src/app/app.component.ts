import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite.service';
import { extractColors } from 'extract-colors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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

    extractColors(this.src).then(colors => {
      console.log(colors);
    });
  }
}

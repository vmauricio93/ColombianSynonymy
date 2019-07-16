import { Component, OnInit } from '@angular/core';
import { NeovisService } from 'src/app/services/neovis.service';

@Component({
  selector: 'app-neovis',
  templateUrl: './neovis.component.html',
  styleUrls: ['./neovis.component.css'],
  providers : [NeovisService]
})
export class NeovisComponent implements OnInit {

  constructor(private neovisService : NeovisService) { }
    
  ngOnInit() {
    this.neovisService.draw();
  }

}

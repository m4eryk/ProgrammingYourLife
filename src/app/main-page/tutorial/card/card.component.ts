import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() topLogo;
  
  colorLogo:string = '#4749c4';

  constructor() { }

  ngOnInit() {
   
  }
  
}

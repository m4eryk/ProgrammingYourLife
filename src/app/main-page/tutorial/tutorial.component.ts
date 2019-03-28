import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  cards: Array<any>= [];
  

  constructor() {
    this.cards = [
      { logoClass:'fab fa-css3-alt fa-7x'},
      { logoClass:'fab fa-html5 fa-7x'},
      { logoClass:'fab fa-js-square fa-7x'}
    ]
   }

  ngOnInit() {
    
    
  }

}

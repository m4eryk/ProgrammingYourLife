import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-why-we',
  templateUrl: './why-we.component.html',
  styleUrls: ['./why-we.component.css']
})


export class WhyWeComponent implements OnInit {

  images: Array<any> = []
  
  constructor() { 
    
  }

  ngOnInit() {
    this.images = [
      { name: '../../../assets/img/why-baner.jpg',
         tatle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum dignissimos maiores maxime atque natus?"
      },

      { name: '../../../assets/img/0x677C88DF7CC815E3FBE5FDEED5A441C0.jpeg',
         tatle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum dignissimos maiores maxime atque natus?"
      }
   ]
  }

}

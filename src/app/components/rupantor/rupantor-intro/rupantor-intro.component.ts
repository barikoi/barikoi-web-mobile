import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rupantor-intro',
  templateUrl: './rupantor-intro.component.html',
  styleUrls: ['./rupantor-intro.component.scss']
})
export class RupantorIntroComponent implements OnInit {


  story1 = true;
  story2 = false;
  story3 = false;

  boxFinal = false;
  progressBar = false;


  constructor() { }

  ngOnInit() {
  }

  worker() {
    console.log('lol what?');

    setTimeout( () => {
      this.story1 = false;
      this.story2 = true;

    }, 4000);
    setTimeout( () => {
      this.story2 = false;
      this.story3 = true;
    }, 8000);

    setTimeout( () => {


      this.boxFinal = true;
    }, 9000);

    setTimeout( () => {


      this.progressBar = true;
    }, 11000);

    // setTimeout( () => {
    //   // document.querySelector('#stp1').style.visib
    // }, 2200);
  }

}

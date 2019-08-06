import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}

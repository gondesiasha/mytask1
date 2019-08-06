import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
 {

  title = 'project';
  v1;
constructor(private firstpg:Router){

}
//   onclick(){
// this.reactiveform.navigate(['reactive'])
//   }
ngOnInit(){
  // this.firstpg.navigate(['first'])
}
}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'slider';
  slider:any;

  
  output:any;
  num="";
  data:any={};
  v="";
  submit()
  {
    // console.log(this.data.num);
    // this.value=this.data.num;
    // console.log(this.value);
this.num=`${this.num}`;
// console.log(this.num);
this.v=this.num;




this.slider=document.getElementById("myRange");
 this.output=document.getElementById("demo");
// this.output.innerHTML=this.slider.value;
// console.log(this.slider.value);
// console.log(this.output.innerHTML);
this.slider.oninput=function(){
  this.output.innerHTML=this.value;
}





    // this.slider = document.getElementById("myRange");
    // console.log(this.slider);
    // this.output = document.getElementById("demo");

  }



}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  

  title = 'templateforms';
  data:any={};
  arr1:any=[];
 //item:any=[1,2,3,4,545,8];
  arr=[]

  // date:DateModel;
  // options: DatepickerOptions={
  //   format:'DD-MM-YYYY',
  //   todayText:'kjhdj',
  //   style:'big'
  // };
  // constructor(){
  //   this.options=new DatePickerOptions();
  // }
constructor(){

}




  onSubmit(f){
   // alert(JSON.stringify(this.data))
   alert("succesfully registered");
    this.arr1.push(this.data);

  
    
    console.log(this.arr1);
    f.form.reset();
   // this.arr.push(this.arr1);
   }
   ngOnInit(){
     
   }

}

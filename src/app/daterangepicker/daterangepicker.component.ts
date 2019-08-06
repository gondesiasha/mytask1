import { Component,OnInit } from '@angular/core';
import {IMyDrpOptions} from 'mydaterangepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';


@Component({
  selector: 'app-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.scss']
})
export class DaterangepickerComponent implements OnInit {

  title = 'rangepicker';
  range1:any;
  range2:any;
d1:any;
d2:any;

  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd.mm.yyyy',
};


public myDatePickerOptions: IMyDpOptions = {

  dateFormat: 'dd.mm.yyyy',
};

private myForm: FormGroup;
constructor(private formBuilder: FormBuilder) { }
ngOnInit() {
  this.myForm = this.formBuilder.group({    

      myDateRange: ['', Validators.required],
      myDate1: [null, Validators.required],
      myDate2: [null, Validators.required]
     
  });

   
  let date = new Date();
  this.myForm.patchValue({myDate1: {
  date: {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()}


  }});
  this.myForm.patchValue({myDate2: {
    date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
  
        
    }});







 
  
}
setDateRange(): void {
 
  let date = new Date();
  this.myForm.patchValue({myDateRange: {
      beginDate: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
      },
      endDate: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
      }
  }});

  
}
submit(form){
  console.log(form.myDateRange.beginDate);
  console.log(form.myDateRange.endDate);
  this.d1=form.myDateRange.beginDate;
  this.d2=form.myDateRange.endDate;



  // console.log(this.myForm);
  // console.log(this.myForm.value);
  // console.log(this.myForm.value.myDateRange.beginDate);
  // console.log(this.myForm.value.myDateRange.endDate);
  // this.d1=this.myForm.value.myDateRange.beginDate;
  // this.d2=this.myForm.value.myDateRange.endDate;
  console.log(this.d1);
  console.log(this.d2);

  this.range1 = {
    date: {
      year: this.d1.year,
      month: this.d1.month,
      day: this.d1.day
    }
  
   
  };
  this.range2={
    date: {
      year: this.d2.year,
      month: this.d2.month,
      day: this.d2.day
    }

  };

}







}

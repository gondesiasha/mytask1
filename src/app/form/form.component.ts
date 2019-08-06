import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { FormControl, FormGroup ,Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  data:any=[];
  EmployeeForm:FormGroup;

  constructor(private formBuilder: FormBuilder ,private http:HttpClient) { }

  ngOnInit() {
    this.EmployeeForm = this.formBuilder.group({
      employeename: ['', [Validators.required]],
      remarks: ['', [Validators.required]],
      department:['',[Validators.required]],
    
   
    
  })
  
    











     this.getList();


  }
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });













  getList(){
 
    this.http.get('http://localhost:9100/api/emp')
    .subscribe((res) => {
      this.data = res;
      console.log(this.data);
  
    }, error => {
      console.log(error);
    });
  
    
  }














}

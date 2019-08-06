import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-encrypt-decrypt',
  templateUrl: './encrypt-decrypt.component.html',
  styleUrls: ['./encrypt-decrypt.component.scss']
})
export class EncryptDecryptComponent implements OnInit {
  title = 'encrypt';
  data:any={};
  name:any;
  data1:any;
  data2:any;
  d:any={};
  name1:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  encrypt()
  {
    console.log(this.data);
    console.log(this.data.fullname);
    this.name=this.data.fullname;
    console.log(this.name);

    this.http.post('http://localhost:1111/api/data',this.name, {responseType: 'text'})           
    .subscribe((res) => {
      this.data1=res;
      console.log(this.data1);
    
       }, error => {
  
      console.log(error);
    });

  }
  decrypt()
  {
    console.log(this.d)
    console.log(this.d.fullname1);
    this.name1=this.d.fullname1;

    this.http.post('http://localhost:1111/api/data1',this.name1, {responseType: 'text'})           
    .subscribe((res) => {
      this.data2=res;
      console.log(this.data2);
    
       }, error => {
  
      console.log(error);
    });

  }
  


  

}

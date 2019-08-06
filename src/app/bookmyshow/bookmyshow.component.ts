import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookmyshow',
  templateUrl: './bookmyshow.component.html',
  styleUrls: ['./bookmyshow.component.scss']
})
export class BookmyshowComponent implements OnInit {
content:any;

  contentArray:any
theatre:any
smovie:any
stheatre='';
tickets="";
phonenumber='';
data:any;
phone="";
avl:number;
arr:any;
theaterid:any;
a:any;
isdisabled="disabled";
cost="";
c:number=100;


  constructor(private http: HttpClient) { }

 ngOnInit(){
  
  this.getList();

  
 }
 
getList(){
 
  this.http.get('http://localhost:9000/api/movies')
  .subscribe((res) => {
    this.content = res;
    this.contentArray=this.content[0];
   console.log(this.contentArray);
   //console.log(this.contentArray[0]);

  }, error => {
    console.log(error);
  });

  
}

postList(id,namem){
 
  
  this.stheatre='';
 this.smovie=namem;
  this.http.post('http://localhost:9000/api/theatres', id)
  .subscribe((res) => {
    
 
    this.theatre = res[0];
    console.log(this.theatre);
    // console.log(this.theatre)
  }, error => {
    console.log(error);
  });

}



bookingDetails(namet,as,ttid){
  this.avl=0;
  this.avl=as;
  this.theaterid=ttid;
  if(this.avl==parseInt(this.tickets)||(this.avl>parseInt(this.tickets)))
  this.isdisabled='';
  else 
  this.isdisabled='disabled';
  console.log(this.theaterid);
  this.stheatre=namet;
 
 // this.a=this.data;
  
  
 
}

book(tic)
{
  
 console.log(tic)
    this.tickets=`${this.tickets}`;
  this.phonenumber=`${this.phonenumber}`;
  this.cost=`${this.c*parseInt(this.tickets)}`;
  
   //  this.data[]={
//   this.
//  }

//  ]
  // this.data.push({
  //   ticket:this.tickets
  // })
  // console.log(this.data);
  // alert(`${this.tickets}  ${this.phone}`);
 var  asha ={
    id1:tic,
    id2:this.theaterid
  }
  this.tickets=`${this.tickets}`;
  this.phonenumber=`${this.phonenumber}`;
  this.http.post('http://localhost:9000/api/theatres1',asha)           
  .subscribe((res) => {
    this.data=res;
    console.log(this.data);
  
     }, error => {
    console.log(error);
  });
 
  
  alert("your ticket is booked")
}
rest(ticc)
{
  var  Mani ={
    id1:ticc,
    id2:this.theaterid
  }

  
  this.smovie="";
this.stheatre="";
this.cost="";


this.http.post('http://localhost:9000/api/theatres2',Mani)           
  .subscribe((res) => {
    this.data=res;
    console.log(this.data);
  
     }, error => {
    console.log(error);
  });


}
}

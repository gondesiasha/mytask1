import { Component, OnInit, Input } from '@angular/core';
import { ReactiveService} from '../reactive.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
viewinfo;
  sub: any;
  name1: any;
  
  data2: any;
  constructor(private service:ReactiveService, public _route: ActivatedRoute ,private http:HttpClient,
    private spinner: NgxSpinnerService) { }
  

 

  ngOnInit() {
    // this.viewinfo=this.service.viewd;
    // console.log(this.viewinfo);
    // console.log(this._route.snapshot.url);

    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);


    
      console.log(this._route.snapshot.url);
      this.sub=this._route.params.subscribe(params => {
        this.name1 = params['a.id'];
      
         console.log(this.name1);

         this.http.post('http://localhost:9100/api/data1',this.name1)           
    .subscribe((res) => {
      this.data2=res;
      console.log(this.data2);
    
       }, error => {
  
      console.log(error);
    });





      });


}
}

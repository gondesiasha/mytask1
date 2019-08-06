import { Component, OnInit } from '@angular/core';
import { ReactiveService} from '../reactive.service';

@Component({
  selector: 'app-importdetails',
  templateUrl: './importdetails.component.html',
  styleUrls: ['./importdetails.component.scss']
})
export class ImportdetailsComponent implements OnInit {
  data:any;

  constructor(private service:ReactiveService) { }

  ngOnInit() {
    this.data=this.service.impdata;
    console.log(this.data);

  }

}

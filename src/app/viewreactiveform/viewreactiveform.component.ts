import { Component, OnInit } from '@angular/core';
import { ReactiveService} from '../reactive.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-viewreactiveform',
  templateUrl: './viewreactiveform.component.html',
  styleUrls: ['./viewreactiveform.component.scss']
})
export class ViewreactiveformComponent implements OnInit {
reactive:any;

saveAsExcelFile: any;

excelData:any =[];
  constructor(private service:ReactiveService,public router: Router,public _route: ActivatedRoute
    , private exportAsService: ExportAsService) { }

  ngOnInit() {
    this.reactive=this.service.reactivedata;
  }
  view( a) {
    
    // console.log(a);
    // this.service.viewd = a;
    // console.log(this.service.viewd);

    // this.router.navigate(['view']);
    console.log(`${a.name}`);
  


    this.router.navigateByUrl(`/view/${a.id}`);

    //console.log(this.v);


  }
  config: ExportAsConfig = {
    type: 'pdf',
    elementId: 'mytable',
    options: {
      jsPDF: {
        orientation: 'landscape'
      }
    }
  };


  exportAs(type: SupportedExtensions, opt?: string) {
    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    this.exportAsService.save(this.config, 'myFile').subscribe(() => {
      // save started
    });
    // this.exportAsService.get(this.config).subscribe(content => {
    //   console.log(content);
    // });
  }
  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }
  Upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      // fileReader.readAsArrayBuffer(this.file);
      this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      console.log(this.excelData);
      this.service.impdata=this.excelData;
      console.log(this.service.impdata);
    }
    fileReader.readAsArrayBuffer(this.file);
    console.log(this.service.impdata);
  
    
   // this.router.navigate(['importdata']);


  }



}

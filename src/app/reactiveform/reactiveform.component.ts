import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IMyDpOptions } from 'mydatepicker';
import * as moment from 'moment';
import * as _ from 'underscore';
import { ReactiveService } from '../reactive.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import * as XLSX from 'xlsx';
import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {


 spinner=false;
  title = 'Reactiveform';
  registrationForm: FormGroup;
  arr: any = [];
  obj: any;
  data: any;
  todaydate1: any;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  cities: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  cityname: any = [];
  a: any;
  str: string = "";
  b: any;
  email:any=[];
  mobile:any=[];
  c:number=0;
  // spinner:boolean=true;




  public myDatePickerOptions: IMyDpOptions = {

    dateFormat: 'yyyy-mm-dd', // dd-mmm-yyyy
    // editableDateField: false,
    // showTodayBtn: true,
    // sunHighlight: true,
    // satHighlight: false,
    // markCurrentDay: true,
    // markCurrentMonth: true,
    // markCurrentYear: true,
    // inline: true,
    // selectorHeight: '232px',
    // selectorWidth: '252px',
    // height: '34px',
    // width: '100%',
    // componentDisabled: false,
    // showClearDateBtn: true,
    // openSelectorOnInputClick: true
    disableSince: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate()
    }
  };




  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private service: ReactiveService,public router: Router,public _route: ActivatedRoute,
   private exportAsService: ExportAsService) { }

  ngOnInit() {


this.spinner=true;
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      // dob:['',[Validators.required]],
      dob: [null, Validators.required],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]],
      land: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      college: ['', [Validators.required]],
      address: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', Validators.required, this.selectedItems],


    })



    this.cities = [
      { item_id: 1, item_text: "delhi" },
      { item_id: 2, item_text: "Banglore" },
      { item_id: 3, item_text: "pune" },
      { item_id: 4, item_text: "mumbai" },
      { item_id: 5, item_text: "chennai" },
      { item_id: 6, item_text: "Noida" }
    ];
    this.selectedItems = [{ item_id: 4, item_text: "mumbai" }, { item_id: 5, item_text: "chennai" }];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.getEmployeesList();



    // this.todaydate1 = moment().format('YYYY-MM-DD');
    console.log(this.registrationForm.value.dob)

  }

  getEmployeesList() {
    this.spinner=false;


    this.http.get('http://localhost:9100/api/data')
  .subscribe((res) => {
    this.arr = res;
    console.log(this.arr);

  }, error => {
    console.log(error);
  });




  }

  onitemselect(items: any) {
    console.log('onitemselect', items);

  }


  setDate(): void {
    let date = new Date();
    this.registrationForm.patchValue({
      dob: {
        date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        }

      }

    }


    );



  }

  clearDate(): void {
    this.registrationForm.patchValue({ dob: null });
  }



  onSubmit(formdetails) {
    this.email.push(formdetails.email);
    this.mobile.push(formdetails.mobile);
    console.log(this.email);
    console.log(this.arr);
    // for(let i=0;i<this.arr.length;i++)
    // {
    //   if((this.arr[i].email==this.email)||(this.arr[i].mobile==this.mobile))
    //   {
    //     alert("entered mails must be different");
    //   }
     
    
    // }
  



   

    console.log(formdetails);
    // console.log(formdetails.city.value.item_text);
    // console.log(formdetails.city[0].item_text);
    this.cityname = formdetails.city;
    console.log(this.registrationForm);
    console.log(this.registrationForm.value);
    console.log(this.cityname);




    this.b = _.pluck(this.cityname, 'item_text');
    this.str = this.b.toString();



    //   this.a=this.cityname.map(function (element) {

    //     var value = element.item_text;


    //     return value;
    //    });
    //  console.log(this.a);
    //  console.log(this.a.toString());
    //  this.str=this.a.toString();
    //  console.log(this.str);

    //  for(let i=0;i<this.a.length;i++)
    //  {
    //   this.str=this.str+"  "+this.a[i];

    //  }
    //  console.log(this.str);




    //console.log(this.a.split(""));





    // console.log(formdetails.dob.formatted)
    //date=moment(date).format('yyyy dd mm');
    console.log(moment(formdetails.dob.formatted).format('YYYY-MM-DD'));

    formdetails['dob'] = moment(formdetails.dob.formatted).format('YYYY-MM-DD');
    formdetails['city'] = this.str;
    // console.log(formdetails);
    // this.obj=formdetails.value;
    //console.log(this.obj);



    this.arr.push(this.registrationForm.value);
    // this.arr.push(this.cityname);


    console.log(this.arr);
    // this.spinner.show();

    for(let i=0;i<this.arr.length;i++)
    {
      if((this.arr[i].email==this.email)||(this.arr[i].mobile==this.mobile))
      {
         this.c=1;
         break;

      
        
       
      }   
    }
      if(this.c==1)
      {
        alert("error");
        
      
      }
      else {
        this.http.post('http://localhost:9100/api/data', formdetails)
        .subscribe((res) => {
         // this.data = res;
          this.getEmployeesList();
          //console.log(this.data);
  
        },
        
        error => {
  
          console.log(error);
        },
       // ()=>this.spinner.hide()
        );

      
      }
      
  
     
    
  
   
    
    console.log(this.c);
    
    

    // this.http.post('http://localhost:9100/api/data', formdetails)
    //   .subscribe((res) => {
    //    // this.data = res;
    //     this.getEmployeesList();
    //     //console.log(this.data);

    //   },
      
    //   error => {

    //     console.log(error);
    //   },
    //  // ()=>this.spinner.hide()
    //   );

    this.registrationForm.reset();






    // this.arr.push(this.registrationForm);
    // console.log(this.arr);
    // alert(this.arr);

  }
  viewdetails()
  {
    this.service.reactivedata=this.arr;
    console.log(this.service.reactivedata);
    this.router.navigate(['reactivedata']);
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
 
 

 






}

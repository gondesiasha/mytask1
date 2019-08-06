import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-addmore',
  templateUrl: './addmore.component.html',
  styleUrls: ['./addmore.component.scss']
})
export class AddmoreComponent implements OnInit {
  AddForm: FormGroup;
  arr: FormArray;
  images:any=[];
  j:any;
  imageScr:any=[];
  a:any=[];
 // imageSrc: string | ArrayBuffer;
  // imageSrc: string | ArrayBuffer;


  public imagePath;
  imgURL: any;
  public message: string;

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.AddForm = this.formBuilder.group({

      firstname: '',
      lastname: '',
      email: '',


      arr: this.formBuilder.array([this.createitem()])


    });
    this.images=[
      { item_id:1, image:"./assets/images/pic.jpg" },
      { item_id:2, image:"./assets/images/pic2.jpg" },
      { item_id:3, image:"./assets/images/pic3.jpg" },
      { item_id:4, image:"./assets/images/pic4.jpg"}
    ];
  }
  createitem(): FormGroup {


    return this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      file: ['', Validators.required],
      im: ['', Validators.required],
      im1: ''




      // file:['',Validators.required],

    });
  }
  addItem(n1): void {


    var n2 = n1 + 1;
    // this.arr = this.AddForm.get('arr') as FormArray;
    // this.arr.push(this.createitem().at(n1));
    //this.arr.insert(n2, this.createitem());
    this.arr = <FormArray>this.AddForm.controls.arr;
    // this.arr.push(this.createitem());
    this.arr.insert(n2, this.createitem())
    console.log(n1);
    console.log(this.arr.length);



  }

  Delete(n) {
        this.arr.removeAt(n);
  }
  image(i)
  {
    this.j="";
    this.images.forEach(element => {
      if(element.item_id==i)
      {        this.j=element.image;
        console.log(this.j);
      }
    });
  this.AddForm.patchValue({
   im1: this.j
});
  console.log(this.AddForm);
  }





  // readURL(event: Event, i) {
  //   // this.imageSrc="";
  //   console.log(event);


  //   if (event.target.files && event.target.files[0]) {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();
  //     console.log(reader);
      
  //     reader.onload = e => this.imageSrc = reader.result;
  //     console.log(this.imageSrc)
  //     reader.readAsDataURL(file);
  //     console.log(this.AddForm.controls.arr['controls'][i].value.im);
  //     this.AddForm.controls.arr['controls'][i].patchValue({
  //       im1: this.imageSrc
  //       // console.log(im1);
  //     });
  //    // console.log(this.AddForm.controls.arr['controls'][i], this.imageSrc);

      
  //   }
  // }
    // console.log(this.AddForm.controls.arr['controls'][i]['testch']);
    // this.AddForm.controls.arr['controls'][i].patchValue({
    //   testch : 'demo'
    // });
  






  //   readURL(event: Event, i) {
  //     // this.imageSrc=""


  //     if (event.target.files && event.target.files[0]) {
  //       const file = event.target.files[0];
  //       const reader = new FileReader();
  //       console.log(reader);
  //       console.log(this.AddForm.controls.arr['controls'][i]);

  //       reader.onload =() => {
  //         this.AddForm.controls.arr['controls'][i].patchValue({
  //           im1: reader.result
  //         });
  //         reader.readAsDataURL(im1);
  //         // this.cd.markForCheck();
  //     };
  //   }
  // }




  onFileChange(event) {
    console.log(event)
    console.log(event.target.files);
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      //  console.log(reader.__zone_symbol__originalInstance.result);

      reader.onload = () => {
        this.AddForm.patchValue({
          file: reader.result
        });
       // console.log(file.name);

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }



  



  

}

import { Component, OnInit, Input } from '@angular/core';
import { CustomFormsModule, CustomValidators } from 'ngx-custom-validators';
// import { NG_VALIDATORS, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validator } from '../validator';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { zipcodeValidator, passValidator } from './validator';




const MyValidator: ValidatorFn = (fg: FormGroup) => {
  const che = fg.get('check').value;

  const name1 = fg.get('name').value;
  if ((che == true && name1 != null && name1) || (che == false)) {
    return null;
  }
  else {
    if ((che == true && (name1 == null || !name1)) || (che == false && name1 != null)) {
      return { 'name': 'error' }
    }
  }
};



@Component({
  selector: 'app-custom-validaitons',
  templateUrl: './custom-validations.component.html',
  styleUrls: ['./custom-validations.component.scss'],

})
export class CustomValidationsComponent implements OnInit {


  //loginForm:FormGroup;
  // fullname:any;
  // child:any;
  // hasChildren:boolean=false;
  ngOnInit() {



  }



  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cnfpass: ['', passValidator],
      // zip: ['', zipcodeValidator],
      address: this.fb.group({
        check: [null],
        name: [null]

      }, { validator: MyValidator })


    });


    this.form.controls.password.valueChanges
      .subscribe(
        x => this.form.controls.cnfpass.updateValueAndValidity()
      )

    // this.form.controls.check.valueChanges.subscribe(
    //   y=>this.form.controls.check.updateValueAndValidity()
    // )

  }






  // check()
  // {
  //   this.expirydatevalidator();
  // }



  // expirydatevalidator(control:AbstractControl){
  //   if(control)
  //   {
  //     const group=<FormGroup>control.root.get('address');
  //     console.log(group);
  //     if(group){
  //       const add=group.controls.addresstype;
  //       console.log(add);

  //       if(add)
  //       {
  //         console.log(add.value)
  //         if(add.value=='temp')
  //         {
  //           if(control.value===null || control.value===undefined || control.value === ""){
  //             return 'error';
  //           }
  //         }
  //       }
  //     }
  //   }
  //   return null;


  // }



  // patchName(){
  //   this.form.patchValue({
  //     name:['']
  //   })
  // }

  onSubmitt() {
    // console.log(this.form.controls.zip);
    this.form.markAsTouched();
    console.log(this.form)
  }



}







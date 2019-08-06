import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FirstComponent } from './first/first.component';
import{ TemplateComponent} from './template/template.component';
import { from } from 'rxjs';
import { BookmyshowComponent } from './bookmyshow/bookmyshow.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DaterangepickerComponent} from './daterangepicker/daterangepicker.component';
import { FormComponent } from './form/form.component';
import { AddmoreComponent } from './addmore/addmore.component';
import { ViewComponent } from './view/view.component';
import { CalenderComponent } from './calender/calender.component';
import { ViewreactiveformComponent } from './viewreactiveform/viewreactiveform.component';
import { ImportdetailsComponent } from './importdetails/importdetails.component';
import { CustomValidationsComponent } from './custom-validations/custom-validations.component';
import { EncryptDecryptComponent } from './encrypt-decrypt/encrypt-decrypt.component';
import { SliderComponent } from './slider/slider.component';
import { SocketComponent } from './socket/socket.component';


const routes: Routes = [
 
  { path: 'reactive', component:ReactiveformComponent },
  { path: 'template', component:TemplateComponent  },
  { path: 'BookMyShow', component:BookmyshowComponent  },
  { path: 'first', component:FirstComponent },
  { path: 'calculator', component:CalculatorComponent },
  { path: 'daterangepicker',component:DaterangepickerComponent},
  { path: 'form',component:FormComponent},
  { path: 'addmore' ,component:AddmoreComponent},
  { path: 'view/:a.id' ,component:ViewComponent},
  { path: 'calendar',component:CalenderComponent },
 // { path: '**', redirectTo: '/first', pathMatch: 'full' }
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path:'reactivedata',component:ViewreactiveformComponent},
  {path:'importdata',component:ImportdetailsComponent},
  {path:'custom', component:CustomValidationsComponent },
  {path:'encrypt', component:EncryptDecryptComponent },
  { path:'slider',component:SliderComponent},
  { path:'socket',component:SocketComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

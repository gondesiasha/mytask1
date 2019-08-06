// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ReactiveformComponent } from './reactiveform/reactiveform.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ReactiveformComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyDatePickerModule } from 'mydatepicker';
import { NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FirstComponent } from './first/first.component';
import { TemplateComponent } from './template/template.component';
import { BookmyshowComponent } from './bookmyshow/bookmyshow.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DaterangepickerComponent } from './daterangepicker/daterangepicker.component';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { FormComponent } from './form/form.component';
import { AddmoreComponent } from './addmore/addmore.component';
import { ViewComponent } from './view/view.component';
import { ReactiveService } from './reactive.service';
import { CalenderComponent } from './calender/calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxSpinnerModule } from "ngx-spinner";
import { ExportAsModule } from 'ngx-export-as';
import { ViewreactiveformComponent } from './viewreactiveform/viewreactiveform.component';
import { ImportdetailsComponent } from './importdetails/importdetails.component';
import { CustomValidationsComponent } from './custom-validations/custom-validations.component';
import { EncryptDecryptComponent } from './encrypt-decrypt/encrypt-decrypt.component';
import { SliderComponent } from './slider/slider.component';
import { SocketComponent } from './socket/socket.component';
import {ChatService} from '../app/socket/chat.service';





@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    FirstComponent,
    TemplateComponent,
    BookmyshowComponent,
    CalculatorComponent,
    DaterangepickerComponent,
    FormComponent,
    AddmoreComponent,
    ViewComponent,CalenderComponent, ViewreactiveformComponent, ImportdetailsComponent, CustomValidationsComponent, EncryptDecryptComponent, SliderComponent, SocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyDatePickerModule,
    FormsModule,
    MyDateRangePickerModule,
    FullCalendarModule,
    NgxSpinnerModule,
    ExportAsModule,
   
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [ReactiveService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Component, OnInit, ViewChild } from '@angular/core';
import { OptionsInput, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';


import timeGrigPlugin from '@fullcalendar/timegrid';



@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent  {
  event:any;
  d:any;

  eventDate: Date;
  eventText: string;

  constructor() { }

 
  calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  

  // DateClick(arg) {
  //   this.d=arg;
  //   if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {

  //     this.event=prompt("asdf");
  //     this.calendarEvents = this.calendarEvents.concat({ 
  //       title: this.event,
  //       start: arg.date,
  //       allDay: arg.allDay
  //     })
      
  //   }
  //   console.log(arg);
  //   console.log(this.d);
    
    
    
 
  // }
  addevent(f)
  {
    console.log(this.eventDate);
    console.log(this.eventText);
    this.calendarEvents = this.calendarEvents.concat({ 
      title: this.eventText.trim(),
      start: this.eventDate
      
    })
f.form.reset();

  
  }

}

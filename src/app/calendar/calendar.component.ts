import  dayGridPlugin  from '@fullcalendar/daygrid';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {};

  constructor() { }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
      };
    }, 2500);
  }



  onDateClick(res:any) {
    
    alert('Clicked on date : ' + res.dateStr)
  }
}

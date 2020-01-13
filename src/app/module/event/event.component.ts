import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/core/service/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  artistName: string;
  events: any[] = [];

  // activatedroute is used for getting param coming from the other page
  constructor(private route: ActivatedRoute, private evenService: EventService) { }

  ngOnInit() {
    // assigned value to artistName coming from search page (home page)
    this.artistName = this.route.snapshot.paramMap.get('name');
    // call event service to get list of events based on artistName
    this.evenService.getEvent(this.artistName).subscribe((result) => {
      console.log(result);
      // map result (bunch of events) to events property which is a list of array
      this.events = result;
    }, error => {
      console.log(error);
    });
  }

}

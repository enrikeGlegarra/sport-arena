import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SportEventService, SportEventSummaryDto} from "../../shared/services/sport-event.service";
import {Router} from "@angular/router";

interface Event {
  id: string;
  title: string;
  organizer: {
    name: string;
    avatar: string;
  };
  date: string;
  type: string;
  image: string;
  location: string;
  province: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  stats: Array<{
    label: string;
    value: string;
  }>;
  participants: number;
  comments: number;
  interested: number;
}

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent implements OnInit {

  constructor(private sportEventService: SportEventService, private router: Router) {
    this.prubeEventos();

  }

  filters = {
    type: '',
    startDate: '',
    endDate: '',
    province: '',
    location: '',
    difficulty: '',
    country: ''
  };

  sportTypes = ['Running', 'Cycling', 'Swimming', 'Triathlon', 'Trail Running'];
  provinces = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao'];
  countries = ['Spain', 'France', 'Italy', 'Germany', 'Portugal'];
  difficulties = ['Easy', 'Medium', 'Hard', 'Expert'];


  filteredEvents: SportEventSummaryDto[] = [];


  applyFilters() {
    /* this.filteredEvents = this.events.filter(event => {
       const matchesType = !this.filters.type || event.type === this.filters.type;
       const matchesProvince = !this.filters.province || event.province === this.filters.province;
       const matchesDifficulty = !this.filters.difficulty || event.difficulty === this.filters.difficulty;
       const matchesDate = !this.filters.startDate || new Date(event.date) >= new Date(this.filters.startDate);
       const matchesEndDate = !this.filters.endDate || new Date(event.date) <= new Date(this.filters.endDate);
       const matchesLocation = !this.filters.location ||
         event.location.toLowerCase().includes(this.filters.location.toLowerCase());

       return matchesType && matchesProvince && matchesDifficulty &&
         matchesDate && matchesEndDate && matchesLocation;
     });*/
  }

  resetFilters() {
    this.filters = {
      type: '',
      startDate: '',
      endDate: '',
      province: '',
      location: '',
      difficulty: '',
      country: ''
    };
    /*  this.filteredEvents = this.events;*/
  }

  prubeEventos() {
    this.sportEventService.getAllSportEvents().pipe().subscribe((events:any) => {
      this.filteredEvents = events.data;
    });
  }

  navigateToEvent(eventId: string) {
    this.router.navigate(['/event', eventId]);
  }

  ngOnInit(): void {
  }

}

import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

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
export class EventsListComponent {
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
  countries= ['Spain', 'France', 'Italy', 'Germany', 'Portugal'];
  difficulties = ['Easy', 'Medium', 'Hard', 'Expert'];

  events: Event[] = [
    {
      id: '1',
      title: 'Madrid Marathon 2024',
      organizer: {
        name: 'Madrid Athletics',
        avatar: 'https://i.pravatar.cc/150?u=madrid'
      },
      date: '2024-04-15',
      type: 'Running',
      image: 'https://picsum.photos/seed/madrid/800/600',
      location: 'Madrid City Center',
      province: 'Madrid',
      difficulty: 'Hard',
      stats: [
        {label: 'Distance', value: '42.2km'},
        {label: 'Elevation', value: '250m'},
        {label: 'Time Limit', value: '6h'},
        {label: 'Aid Stations', value: '8'}
      ],
      participants: 1500,
      comments: 45,
      interested: 2300
    },
    {
      id: '2',
      title: 'Costa Brava Cycling Challenge',
      organizer: {
        name: 'Cycling Club BCN',
        avatar: 'https://i.pravatar.cc/150?u=bcn'
      },
      date: '2024-05-20',
      type: 'Cycling',
      image: 'https://picsum.photos/seed/costa/800/600',
      location: 'Costa Brava',
      province: 'Barcelona',
      difficulty: 'Expert',
      stats: [
        {label: 'Distance', value: '160km'},
        {label: 'Elevation', value: '2500m'},
        {label: 'Time Limit', value: '10h'},
        {label: 'Aid Stations', value: '5'}
      ],
      participants: 800,
      comments: 32,
      interested: 1200
    },
    {
      id: '1',
      title: 'Madrid Marathon 2024',
      organizer: {
        name: 'Madrid Athletics',
        avatar: 'https://i.pravatar.cc/150?u=madrid'
      },
      date: '2024-04-15',
      type: 'Running',
      image: 'https://picsum.photos/seed/madrid/800/600',
      location: 'Madrid City Center',
      province: 'Madrid',
      difficulty: 'Hard',
      stats: [
        {label: 'Distance', value: '42.2km'},
        {label: 'Elevation', value: '250m'},
        {label: 'Time Limit', value: '6h'},
        {label: 'Aid Stations', value: '8'}
      ],
      participants: 1500,
      comments: 45,
      interested: 2300
    },
    {
      id: '2',
      title: 'Costa Brava Cycling Challenge',
      organizer: {
        name: 'Cycling Club BCN',
        avatar: 'https://i.pravatar.cc/150?u=bcn'
      },
      date: '2024-05-20',
      type: 'Cycling',
      image: 'https://picsum.photos/seed/costa/800/600',
      location: 'Costa Brava',
      province: 'Barcelona',
      difficulty: 'Expert',
      stats: [
        {label: 'Distance', value: '160km'},
        {label: 'Elevation', value: '2500m'},
        {label: 'Time Limit', value: '10h'},
        {label: 'Aid Stations', value: '5'}
      ],
      participants: 800,
      comments: 32,
      interested: 1200
    },
    {
      id: '1',
      title: 'Madrid Marathon 2024',
      organizer: {
        name: 'Madrid Athletics',
        avatar: 'https://i.pravatar.cc/150?u=madrid'
      },
      date: '2024-04-15',
      type: 'Running',
      image: 'https://picsum.photos/seed/madrid/800/600',
      location: 'Madrid City Center',
      province: 'Madrid',
      difficulty: 'Hard',
      stats: [
        {label: 'Distance', value: '42.2km'},
        {label: 'Elevation', value: '250m'},
        {label: 'Time Limit', value: '6h'},
        {label: 'Aid Stations', value: '8'}
      ],
      participants: 1500,
      comments: 45,
      interested: 2300
    },
    {
      id: '2',
      title: 'Costa Brava Cycling Challenge',
      organizer: {
        name: 'Cycling Club BCN',
        avatar: 'https://i.pravatar.cc/150?u=bcn'
      },
      date: '2024-05-20',
      type: 'Cycling',
      image: 'https://picsum.photos/seed/costa/800/600',
      location: 'Costa Brava',
      province: 'Barcelona',
      difficulty: 'Expert',
      stats: [
        {label: 'Distance', value: '160km'},
        {label: 'Elevation', value: '2500m'},
        {label: 'Time Limit', value: '10h'},
        {label: 'Aid Stations', value: '5'}
      ],
      participants: 800,
      comments: 32,
      interested: 1200
    }
  ];

  filteredEvents: Event[] = this.events;

  applyFilters() {
    this.filteredEvents = this.events.filter(event => {
      const matchesType = !this.filters.type || event.type === this.filters.type;
      const matchesProvince = !this.filters.province || event.province === this.filters.province;
      const matchesDifficulty = !this.filters.difficulty || event.difficulty === this.filters.difficulty;
      const matchesDate = !this.filters.startDate || new Date(event.date) >= new Date(this.filters.startDate);
      const matchesEndDate = !this.filters.endDate || new Date(event.date) <= new Date(this.filters.endDate);
      const matchesLocation = !this.filters.location ||
        event.location.toLowerCase().includes(this.filters.location.toLowerCase());

      return matchesType && matchesProvince && matchesDifficulty &&
        matchesDate && matchesEndDate && matchesLocation;
    });
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
    this.filteredEvents = this.events;
  }

}

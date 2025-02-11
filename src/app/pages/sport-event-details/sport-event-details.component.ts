import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

interface Subevent {
  id: string;
  name: string;
  description: string;
  distance: string;
  elevation: string;
  startTime: string;
  maxParticipants: number;
  currentParticipants: number;
  difficulty: string;
  route: string;
}

@Component({
  selector: 'app-sport-event-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sport-event-details.component.html',
  styleUrl: './sport-event-details.component.css'
})
export class SportEventDetailsComponent {

  activeTab = 0;
  event = {
    title: 'Triathlon World Series 2024',
    date: '2024-06-15',
    location: 'Barcelona, Spain',
    organizer: 'World Triathlon',
    description: 'Join us for one of the most prestigious triathlon events in the world. Whether you\'re a seasoned athlete or taking on your first triathlon challenge, we have categories for all levels.',
    image: 'https://picsum.photos/seed/triathlon/1200/400',
    subevents: [
      {
        id: 'olympic',
        name: 'Olympic Distance',
        description: 'The classic Olympic distance triathlon featuring a challenging but achievable combination of swimming, cycling, and running.',
        distance: '51.5km total',
        elevation: '750m',
        startTime: '07:00',
        maxParticipants: 1000,
        currentParticipants: 756,
        difficulty: 'Advanced',
        route: 'https://picsum.photos/seed/olympic/800/400'
      },
      {
        id: 'sprint',
        name: 'Sprint Distance',
        description: 'A shorter, faster-paced event perfect for beginners or those looking for a quick, intense race.',
        distance: '25.75km total',
        elevation: '400m',
        startTime: '08:30',
        maxParticipants: 1500,
        currentParticipants: 1023,
        difficulty: 'Intermediate',
        route: 'https://picsum.photos/seed/sprint/800/400'
      },
      {
        id: 'super',
        name: 'Super League',
        description: 'An elite-level event featuring multiple rounds of short, intense racing in an elimination format.',
        distance: '7.5km per round',
        elevation: '150m per round',
        startTime: '14:00',
        maxParticipants: 500,
        currentParticipants: 342,
        difficulty: 'Elite',
        route: 'https://picsum.photos/seed/super/800/400'
      }
    ] as Subevent[]
  };

  setActiveTab(index: number) {
    this.activeTab = index;
  }

  getProgressPercentage(current: number, max: number): number {
    return (current / max) * 100;
  }
}

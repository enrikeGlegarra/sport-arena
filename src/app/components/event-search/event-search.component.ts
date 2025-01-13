import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent {
  events = [
    {
      name: 'NY Marathon 2024',
      date: 'Nov 3, 2024',
      location: 'New York, NY',
      description: 'The world\'s largest marathon. Run through all five boroughs of NYC.'
    },
    {
      name: 'Gran Fondo NYC',
      date: 'May 15, 2024',
      location: 'New York, NY',
      description: '100-mile cycling event through the challenging terrain of NY state.'
    },
    {
      name: 'Rancho de Gravel',
      date: 'June 1, 2024',
      location: 'Santa Fe, NM',
      description: 'Epic gravel race through the beautiful New Mexico landscape.'
    }
  ];
}
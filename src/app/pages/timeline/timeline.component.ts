import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-timeline',
templateUrl: './timeline.component.html',
styleUrls: ['./timeline.component.css'],
standalone: true,
imports: [
    CommonModule,
    FormsModule
]
})
export class TimelineComponent {
  searchQuery: string = '';
  filteredActivities: any[] = [];

  weeklyStats = {
    distance: '158.3km',
    time: '12h 24m',
    elevation: '2,453m'
  };

  completedEvents = [
    {
      name: 'NY Marathon 2023',
      date: 'Nov 5, 2023',
      result: '3:45:22'
    },
    {
      name: 'Brooklyn Half Marathon',
      date: 'Oct 15, 2023',
      result: '1:45:12'
    },
    {
      name: 'Central Park 10K',
      date: 'Sep 30, 2023',
      result: '42:15'
    }
  ];

  upcomingEvents = [
    {
      name: 'Boston Marathon 2024',
      date: 'Apr 15, 2024',
      status: 'Registered'
    },
    {
      name: 'Chicago Triathlon',
      date: 'May 25, 2024',
      status: 'Registration Open'
    },
    {
      name: 'NYC Century Bike Tour',
      date: 'Jun 8, 2024',
      status: 'Interested'
    }
  ];

  activities = [
    {
      userName: 'Alex Runner',
      userAvatar: 'https://i.pravatar.cc/150?u=alex',
      time: '2 hours ago',
      type: 'Morning Run',
      title: 'Central Park Loop',
      image: 'https://picsum.photos/seed/run1/800/600',
      stats: [
        { value: '12.4km', label: 'Distance' },
        { value: '5:23/km', label: 'Pace' },
        { value: '1:07:14', label: 'Time' },
        { value: '156bpm', label: 'Heart Rate' }
      ],
      details: [
        { label: 'Elevation Gain', value: '125m' },
        { label: 'Calories', value: '847' },
        { label: 'Cadence', value: '172spm' }
      ],
      kudos: 24,
      comments: 3
    },
    {
      userName: 'Sarah Cyclist',
      userAvatar: 'https://i.pravatar.cc/150?u=sarah',
      time: '5 hours ago',
      type: 'Afternoon Ride',
      title: 'Hudson River Trail',
      image: 'https://picsum.photos/seed/ride1/800/600',
      stats: [
        { value: '45.2km', label: 'Distance' },
        { value: '28.4km/h', label: 'Avg Speed' },
        { value: '1:35:22', label: 'Time' },
        { value: '148bpm', label: 'Heart Rate' }
      ],
      details: [
        { label: 'Elevation Gain', value: '456m' },
        { label: 'Calories', value: '1,247' },
        { label: 'Max Speed', value: '42.3km/h' }
      ],
      kudos: 56,
      comments: 8
    }
  ];

  constructor() {
    this.filteredActivities = this.activities;
  }

  filterActivities() {
    if (!this.searchQuery) {
      this.filteredActivities = this.activities;
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredActivities = this.activities.filter(activity =>
      activity.title.toLowerCase().includes(query) ||
      activity.type.toLowerCase().includes(query) ||
      activity.userName.toLowerCase().includes(query)
    );
  }
}

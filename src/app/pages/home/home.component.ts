import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentSlide = 0;
  slides = [
    {
      image: 'https://images.unsplash.com/photo-1530143584546-02191bc84eb5?q=80&w=2069',
      title: 'Gran Fondo',
      description: 'Epic road cycling adventures through stunning landscapes'
    },
    {
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070',
      title: 'New York Marathon',
      description: 'Run through the heart of the Big Apple'
    },
    {
      image: 'https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?q=80&w=2070',
      title: 'Rancho de Gravel',
      description: 'Conquer the untamed gravel trails'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentSlide = index;
  }
}

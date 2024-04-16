import { Component } from '@angular/core';

@Component({
  selector: 'property-card',
  standalone: true,
  templateUrl: 'property-card.component.html',
  styleUrl: 'property-card.component.css',
})
export class PropertyCardComponent {
  Property: any = {
    Id: 1,
    Title: 'Clandestine Avenue, Burnside',
    Type: 'House',
    Price: 12000,
  };
}

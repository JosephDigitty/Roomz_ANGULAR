import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() image?: string;
  @Input() tags?: string[] = [];
  @Input() href_name?: string;
  @Input() href_url?: string;
}

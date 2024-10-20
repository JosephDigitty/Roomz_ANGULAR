import { Component } from '@angular/core';
import { CardComponent } from '../../reuseables/card/card.component';
import { ButtonComponent } from '../../reuseables/button/button.component';

@Component({
  selector: 'app-hero2',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './hero2.component.html',
  styleUrl: './hero2.component.css'
})
export class Hero2Component {

}

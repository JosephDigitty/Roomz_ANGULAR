import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { Hero2Component } from '../../components/hero2/hero2.component';
import { HomecardsComponent } from '../../components/homecards/homecards.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, Hero2Component,HomecardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

}



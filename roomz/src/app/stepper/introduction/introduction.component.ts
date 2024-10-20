import { Component } from '@angular/core';
import { heroUserCircle } from '@ng-icons/heroicons/outline';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ heroUserCircle })],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {

}

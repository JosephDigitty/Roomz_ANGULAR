import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from "./layouts/footer/footer.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'roomz';
  islistspace: boolean = false;
  isfindlist: boolean = false;
  isstepper1: boolean = false;
  isstepper2: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.islistspace = this.router.url.includes('/list-a-room');
      this.isfindlist = this.router.url.includes('/find-a-room');
      this.isfindlist = this.router.url.includes('/listing-form');
      this.isfindlist = this.router.url.includes('/listing-space');

      console.log(this.isfindlist, this.isfindlist)
    });

  }
}

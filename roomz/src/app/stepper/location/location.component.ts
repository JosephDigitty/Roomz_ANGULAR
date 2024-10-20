import { Component } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms'
import { ChipsModule } from 'primeng/chips';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [MultiSelectModule, FormsModule, ChipsModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  
  values: any[] = [];
  
}

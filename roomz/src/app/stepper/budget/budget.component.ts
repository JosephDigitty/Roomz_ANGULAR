import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [InputTextModule, CommonModule, FormsModule,],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {
    value: any[] = [];
    date: Date | undefined
}

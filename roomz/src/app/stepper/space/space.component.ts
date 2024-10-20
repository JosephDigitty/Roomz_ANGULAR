import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { heroBuildingStorefront } from '@ng-icons/heroicons/outline';
import { heroBuildingLibrary } from '@ng-icons/heroicons/outline';
import { heroVideoCamera } from '@ng-icons/heroicons/outline';
import { ionBedOutline } from '@ng-icons/ionicons';
import { ionSchoolOutline } from '@ng-icons/ionicons';
import { ionArrowBack } from '@ng-icons/ionicons';
import { heroBuildingOffice2 } from '@ng-icons/heroicons/outline';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { CheckboxModule } from 'primeng/checkbox';



@Component({
  selector: 'app-space',
  standalone: true,
  imports: [CommonModule, NgIconComponent, CheckboxModule ],
  viewProviders: [provideIcons({ heroBuildingStorefront, heroBuildingLibrary, 
  heroVideoCamera, ionBedOutline, ionSchoolOutline, ionArrowBack, heroBuildingOffice2 })],
  templateUrl: './space.component.html',
  styleUrl: './space.component.css'
})

export class SpaceComponent {

  @Output() stepComplete = new EventEmitter<void>();

    spaceForm = new FormGroup({
    spaceName: new FormControl('', Validators.required),  // Example required field
    spaceSize: new FormControl('', Validators.required),})
  markStepComplete() {
    this.stepComplete.emit();  // Notify parent that the step is completed
  }

  
}

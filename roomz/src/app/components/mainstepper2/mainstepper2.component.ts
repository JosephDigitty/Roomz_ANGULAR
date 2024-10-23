import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptingComponent } from '../../stepper2/accepting/accepting.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionArrowBack } from '@ng-icons/ionicons';
import { heroCheckSolid } from '@ng-icons/heroicons/solid';
import { Space2Component } from '../../stepper2/space2/space2.component';
import { PreferencesComponent } from "../../stepper2/preferences/preferences.component";
import { SpacefeaturesComponent } from '../../stepper2/spacefeatures/spacefeatures.component';
import { RentComponent } from "../../stepper2/rent/rent.component";
import { AvalabilityComponent } from "../../stepper2/avalability/avalability.component";
import { ImagesComponent } from "../../stepper2/images/images.component";
import { HousemateComponent } from "../../stepper2/housemate/housemate.component";
import { Introduction2Component } from "../../stepper2/introduction2/introduction2.component";

@Component({
  selector: 'app-mainstepper2',
  standalone: true,
  imports: [CommonModule, NgIconComponent, AcceptingComponent, Space2Component, PreferencesComponent,
    SpacefeaturesComponent, RentComponent, AvalabilityComponent, ImagesComponent, HousemateComponent, Introduction2Component],
  viewProviders: [provideIcons({ ionArrowBack, heroCheckSolid })],
  templateUrl: './mainstepper2.component.html',
  styleUrl: './mainstepper2.component.css'
})
export class Mainstepper2Component {
  currentStep: number = 0;
  completedSteps: boolean[] = [];
  currentStepValid: boolean = false;
  steps = [
    { label: 'What type of space do you have?' },
    { label: 'Your housing preferences?' },
    { label: 'Space features' },
    { label: 'Rent per week' },
    { label: 'Space availability' },
    { label: 'Add images of your property' },
    { label: 'Housemate preference' },
    { label: 'Accepting' },
    { label: 'Introduce yourself and property'},
  ]
  goToNextStep() {
    this.completedSteps[this.currentStep] = true;
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  isCurrentStep(stepIndex: number): boolean {
    return this.currentStep === stepIndex;
  }

  isFinalStep(): boolean {
    return this.currentStep === this.steps.length - 1;
  }

  goToPreviousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(stepIndex: number) {
    this.currentStep = stepIndex;
  }

  completeStep() {
    this.completedSteps[this.currentStep] = true;
    this.goToNextStep();  // Automatically move to the next step
  }

  isStepComplete(stepIndex: number): boolean {
    return this.completedSteps[stepIndex] === true;
  }
}

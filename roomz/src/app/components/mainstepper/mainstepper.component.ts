import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceComponent } from '../../stepper/space/space.component';
import { LocationComponent } from '../../stepper/location/location.component';
import { BudgetComponent } from '../../stepper/budget/budget.component';
import { LivingComponent } from "../../stepper/living/living.component";
import { IntroductionComponent } from "../../stepper/introduction/introduction.component";
import { DetailsComponent } from "../../stepper/details/details.component";
import { LifestylesComponent } from "../../stepper/lifestyles/lifestyles.component";
import { GreatComponent } from "../../stepper/great/great.component";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionArrowBack } from '@ng-icons/ionicons';
import { heroCheckSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-mainstepper',
  standalone: true,
  imports: [CommonModule, SpaceComponent, LocationComponent, 
    BudgetComponent, LivingComponent, IntroductionComponent, 
    DetailsComponent, LifestylesComponent, GreatComponent,  NgIconComponent],
  viewProviders: [provideIcons({ ionArrowBack, heroCheckSolid })],
  templateUrl: './mainstepper.component.html',
  styleUrl: './mainstepper.component.css'
})
export class MainstepperComponent {
  currentStep: number = 0;
  completedSteps: boolean[] = [];
  currentStepValid: boolean = false;
  steps = [
    { label: 'What kind of space do you need?' },
    { label: 'Where is your preferred location?' },
    { label: 'Stay duration and budget' },
    { label: 'Living customization' },
    { label: 'Introduce yourself' },
    { label: 'Work details' },
    { label: 'Lifestyle choices' },
    { label: 'What makes you great to live with?' }
  ];

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

 

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FindlistingComponent } from './pages/findlisting/findlisting.component';
import { MainstepperComponent } from './components/mainstepper/mainstepper.component';
import { SpaceComponent } from './stepper/space/space.component';
import { LocationComponent } from './stepper/location/location.component';
import { BudgetComponent } from './stepper/budget/budget.component';
import { LivingComponent } from './stepper/living/living.component';
import { IntroductionComponent } from './stepper/introduction/introduction.component';
import { DetailsComponent } from './stepper/details/details.component';
import { LifestylesComponent } from './stepper/lifestyles/lifestyles.component';
import { GreatComponent } from './stepper/great/great.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "find-a-room",
        component: FindlistingComponent
    },
    {
        path: "listing-form",
        component: MainstepperComponent,
        children: [
            {
                path: "listing-space",
                component: SpaceComponent   
            },
            {
                path: "listing-location",
                component: LocationComponent  
            },
            {
                path: "listing-budget",
                component: BudgetComponent   
            },
            {
                path: "listing-customization",
                component: LivingComponent   
            },
            {
                path: "listing-space",
                component: SpaceComponent   
            },
            {
                path: "listing-introduction",
                component: IntroductionComponent  
            },
            {
                path: "listing-workdetails",
                component: DetailsComponent   
            },
            {
                path: "listing-lifestyle-choices",
                component: LifestylesComponent   
            },
            {
                path: "listing-great-to-live-with",
                component: GreatComponent   
            },
            
        ]
    },
    { path: '**', redirectTo: '' }
];

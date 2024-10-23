import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FindlistingComponent } from './pages/findlisting/findlisting.component';
import { MainstepperComponent } from './components/mainstepper/mainstepper.component';
import { Mainstepper2Component } from './components/mainstepper2/mainstepper2.component';
import { ListpropertyComponent } from './pages/listproperty/listproperty.component';


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
        path: 'list-a-room',
        component: ListpropertyComponent, 
    },
    {
        path: "listing-form",
        component: MainstepperComponent,
    },
    {
        path: "listing-space",
        component: Mainstepper2Component
    },
    { path: '**', redirectTo: '' }
];

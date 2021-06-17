import { Routes } from "@angular/router";
import { DoctorsComponent } from "src/app/doctors/doctors.component";
import { HomeComponent } from "src/app/home/home.component";
import { LoginComponent } from "src/app/login/login.component";



export const routes : Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'doctors',
        component: DoctorsComponent
    },
    {
        path:'login',
        component: LoginComponent
    }
]


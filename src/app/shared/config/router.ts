import { EditproductComponent } from './../../editproduct/editproduct.component';
import { ProductComponent } from './../../product/product.component';
import { Routes } from "@angular/router";
import { AddProductComponent } from "src/app/add-product/add-product.component";
import { CalendarComponent } from "src/app/calendar/calendar.component";
import { DoctorsComponent } from "src/app/doctors/doctors.component";
import { EmployeeComponent } from "src/app/employee/employee.component";
import { HomeComponent } from "src/app/home/home.component";
import { MapComponent } from "src/app/map/map.component";
import { TestFirebaseComponent } from "src/app/test-firebase/test-firebase.component";
import { LoginComponent } from "src/app/user/login/login.component";
import { RegisterComponent } from "src/app/user/register/register.component";
import { YoutubeComponent } from "src/app/youtube/youtube.component";



export const routes : Routes = [
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'doctors',
        component: DoctorsComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: 'calendrier',
        component: CalendarComponent
    },
    {
        path: 'employee',
        component: EmployeeComponent
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'firebase',
        component: TestFirebaseComponent
    },
    {
        path: 'youtube',
        component: YoutubeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'addproduct',
        component: AddProductComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'product/:id',
        component: EditproductComponent
    }

]


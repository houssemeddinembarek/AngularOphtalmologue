import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './shared/config/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { EmployeeComponent } from './employee/employee.component'; // a plugin!
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import{AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment } from '../environments/environment';
import { TestFirebaseComponent } from './test-firebase/test-firebase.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { YoutubeComponent } from './youtube/youtube.component'
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PipePipe } from './shared/pipes/pipe.pipe';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './shared/component/product-item/product-item.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    DoctorsComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    EmployeeComponent,
    MapComponent,
    TestFirebaseComponent,
    YoutubeComponent,
    RegisterComponent,
    AddProductComponent,
    PipePipe,
    ProductComponent,
    ProductItemComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FullCalendarModule ,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6JL68PHM5a5udV_z5qrQAWQB09Yxo2DA'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

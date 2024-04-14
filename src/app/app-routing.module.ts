import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { RoomspageComponent } from './roomspage/roomspage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { TeampageComponent } from './teampage/teampage.component';
import { TestimonialpageComponent } from './testimonialpage/testimonialpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'services', component: ServicespageComponent },
  { path: 'rooms', component: RoomspageComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: 'booking', component: BookingpageComponent },
  { path: 'team', component: TeampageComponent },
  { path: 'testimonial', component: TestimonialpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

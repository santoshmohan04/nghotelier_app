import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { RoomspageComponent } from './roomspage/roomspage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'services', component: ServicespageComponent },
  { path: 'rooms', component: RoomspageComponent },
  { path: 'contact', component: ContactpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

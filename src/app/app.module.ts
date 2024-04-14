import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { BookingComponent } from './booking/booking.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { VideoComponent } from './video/video.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { RoomspageComponent } from './roomspage/roomspage.component';
import { TestimonialpageComponent } from './testimonialpage/testimonialpage.component';
import { HeaderpaginationComponent } from './headerpagination/headerpagination.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { TeampageComponent } from './teampage/teampage.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    NewsletterComponent,
    TestimonialComponent,
    ServiceComponent,
    TeamComponent,
    BookingComponent,
    RoomsComponent,
    AboutusComponent,
    VideoComponent,
    HomepageComponent,
    CarouselComponent,
    TopnavigationComponent,
    AboutpageComponent,
    BookingpageComponent,
    ContactpageComponent,
    ServicespageComponent,
    RoomspageComponent,
    TestimonialpageComponent,
    HeaderpaginationComponent,
    ContactusComponent,
    BookingformComponent,
    TeampageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

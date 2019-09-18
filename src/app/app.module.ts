import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { ContainerComponent } from './components/container/container.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlayerPageComponent } from './components/player-page/player-page.component';
import { ModalComponent } from './components/player-page/modal/modal.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    HomepageComponent,
    PlayerPageComponent,
    ModalComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }

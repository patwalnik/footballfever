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
import { ProfileComponent } from './components/profile/profile.component';
import { PlayerFilterPipePipe } from './pipe/player-filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { ChampionshipComponent } from './components/championship/championship.component';
import { NplPremierDivisionComponent } from './components/npl-premier-division/npl-premier-division.component';
import { TrimDataPipe } from './pipe/trim-data.pipe';
import { CountPipe } from './pipe/count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    HomepageComponent,
    PlayerPageComponent,
    ProfileComponent,
    PlayerFilterPipePipe,
    EventsComponent,
    ChampionshipComponent,
    NplPremierDivisionComponent,
    TrimDataPipe,
    CountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }

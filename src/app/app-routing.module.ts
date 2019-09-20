import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlayerPageComponent} from './components/player-page/player-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EventsComponent } from './components/events/events.component';
import { NplPremierDivisionComponent } from './components/npl-premier-division/npl-premier-division.component';
import { ChampionshipComponent } from './components/championship/championship.component'
const routes: Routes = [
  {path : 'homepage' , component: HomepageComponent },
  {path : '' , redirectTo : 'homepage' , pathMatch: 'full'},
  {path : 'players/:id',  component: PlayerPageComponent},
  {path : 'player/profile/:playerKey',  component : ProfileComponent},
  {path : 'events' ,  component : EventsComponent , pathMatch: 'full'},
  {path : 'events/championship' , component : ChampionshipComponent},
  {path : 'events/npl'  , component : NplPremierDivisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

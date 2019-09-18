import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlayerPageComponent} from './components/player-page/player-page.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path : 'homepage' , component: HomepageComponent },
  {path : '' , redirectTo : 'homepage' , pathMatch: 'full'},
  {path : 'players/:id',  component: PlayerPageComponent},
  {path : '/player/profile/:id',  component : ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

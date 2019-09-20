import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerFilterPipe'
})
export class PlayerFilterPipePipe implements PipeTransform {

  transform(players: any, searchPlayer : string) : any[] {
    if(!players || !searchPlayer){
      return players;
    }
    return players.filter(value=>  {
      if(value.player_name.toLocaleLowerCase().indexOf(searchPlayer.toLocaleLowerCase()) !== -1){
       return value.player_name.toLocaleLowerCase().indexOf(searchPlayer.toLocaleLowerCase()) !== -1
      }
      if(value.player_country.toLocaleLowerCase().indexOf(searchPlayer.toLocaleLowerCase()) !== -1){
        return value.player_country.toLocaleLowerCase().indexOf(searchPlayer.toLocaleLowerCase()) !== -1
      }
    });
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {
  count : [];
  transform(cards: any[], filterMetadata : boolean) {
    if(filterMetadata){
      console.log('length ', [cards.length])
      return this.count[cards.length]
    }
    else{
      return [0]
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimData'
})
export class TrimDataPipe implements PipeTransform {
  transform(items: any[], exclusive: boolean): any {
    if (exclusive) { return items.slice(0, items.length - 1); }
    if(items.length == 0){
      return [items["score"] = "not provided"];
    }
    else{
      return [items[items.length - 1]];
    }
    
  }
}


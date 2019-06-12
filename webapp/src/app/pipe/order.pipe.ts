import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {
  
  transform(items: any[], field: string): any[] {
    if (!items) return [];
    else return items;
  }

}

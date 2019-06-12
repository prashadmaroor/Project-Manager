import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderUser'
})
export class OrderUserPipe implements PipeTransform {

  transform(items: any[], field: string): any[] {
    if (!items) return [];
    else  return items;
  }

}

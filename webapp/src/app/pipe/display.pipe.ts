import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../model/project';


export interface IDisplay{
project:any;
inprogress:number;
completed:number;
}


@Pipe({
  name: 'display'
})
export class DisplayPipe implements PipeTransform {

  transform
  (
    displays: IDisplay[],
    projectSearch?: string,
    priorityFromSearch?: number,
    priorityToSearch?: number,
    startDateSearch?: Date,
    endDateSearch?:Date,
  ): IDisplay[] {

    if (!displays) return [];

    return displays;
  }

}

import { Pipe, PipeTransform } from '@angular/core';


export interface IProject{

  project: string;
  priority: number;
  startDate: string;
  endDate: string;
  popupProject:string;

}


@Pipe({
  name: 'project'
})

export class ProjectPipe implements PipeTransform {

  transform
  (
    projects: IProject[],
    projectSearch?: string,
    priorityFromSearch?: number,
    priorityToSearch?: number,
    startDateSearch?: Date,
    endDateSearch?:Date,
  ): IProject[] {

    if (!projects) return [];

    return projects;
  }

}

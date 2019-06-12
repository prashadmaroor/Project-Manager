import { Pipe, PipeTransform } from '@angular/core';
import { ParentTask } from '../model/parent-task';
import { Project } from '../model/project';

export interface ITask {
  task: string;
  priority: number;
  startDate: string;
  endDate: string;
  project:any;
}

@Pipe({
  name: 'task'
})

export class TaskPipe implements PipeTransform {  
  transform
  (
    tasks: ITask[],
    taskSearch?: string,
    priorityFromSearch?: number,
    priorityToSearch?: number,
    startDateSearch?: Date,
    endDateSearch?:Date,
    popupProject?:string
  ): ITask[] {

    if (!tasks) return [];

    return tasks;
  }

}

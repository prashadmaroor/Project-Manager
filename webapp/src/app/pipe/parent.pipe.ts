import { Pipe, PipeTransform } from '@angular/core';


export interface IParent{

  parentTaskId: number;
  parentTask:string;

}

@Pipe({
  name: 'parent'
})
export class ParentPipe implements PipeTransform {

  transform
  (
    parents:IParent[],
    parentId?: number,
    parentTaskSearch?: string,

  ): IParent[] {
    
    if (!parents) return [];

    return parents;
  }

}

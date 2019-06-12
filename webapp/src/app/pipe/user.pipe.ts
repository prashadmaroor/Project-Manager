import { Pipe, PipeTransform } from '@angular/core';

export interface IUser {
  firstName : string;
  lastName  : string;
  employeeId: string;
}

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform
  (
    users: IUser[],
    firstNameSearch ?: string,
    lastNameSearch  ?: string,
    employeeIdSearch?: string
  ): IUser[] {

    if (!users) return [];

    return users;
  }


}

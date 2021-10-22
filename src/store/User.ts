import {
    observable, flow, action, makeObservable, computed
} from 'mobx';
import CommonObject from './base/CommonObject';

export interface IUser {
    id: number,
    name: string,
    employeeNo: string,
    token?: string,
    staticToken?: string,
    loginType?: number,
    employeeType?: string,
    status?: string,
    departmentId?: number,
    departmentName?: string,
    divisionId?: number,
    email?: string,
    mobile?: string,
    age?: number
}

export default class User extends CommonObject<IUser> {
    constructor() {
        super();
        makeObservable(this);
    }

    @observable
    field: any = {};

    mockGetUsername(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('12');
            }, 1000);
        });
    }

    mockGetUserAge(): Promise<number> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(1211111);
            }, 1000);
        });
    }

  @action.bound
  getUserName = async () => {
      const userName: string = await this.mockGetUsername();
      const age: number = await this.mockGetUserAge();
      this.setDetail({
          id: 1,
          name: userName,
          employeeNo: '672941',
          age
      });
      this.list = [
          {
              id: 2,
              name: '1',
              employeeNo: '672941'
          }
      ];
  }

  @computed get length() {
      return this.list.length;
  }
}

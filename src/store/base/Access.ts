import { makeAutoObservable } from 'mobx';
import _ from 'lodash';
import { ODIN_USER } from '../../constant/API';
import { post } from '../../util/request';
import { getLocalUser } from '../../util/localUser';
import storageUtil from '../../util/storage/storage';
import { IUser } from '../User';

const { SEED_FRONT } = ENV_CONFIG;
export interface IAccessStore {

}
export default class Access {
    isLogin: boolean | null = null;

    message: string | null = null;

    user = {};

    userList: IUser[] = [];

    constructor() {
        makeAutoObservable(this);
        const localUser = getLocalUser();

        if (localUser) {
            this.user = localUser;
            this.isLogin = true;
        } else {
            this.isLogin = false;
        }
    }

    login = async (cb: any) => {
        if (!this.isLogin) {
            const result: any = await post(ODIN_USER.GET_CURRENT_USER, { callback: cb });

            if (result) {
                const { user } = result;

                this.setLogin(user);
            }
        }
    }

    loginSeed(cb: any) {
        this.message = null;
        window.location.href = `${SEED_FRONT}access/signin?callBack=${cb}`;
    }

    getUserList = async () => {
        if (this.userList && this.userList.length > 0) {
            return;
        }
        const params = {
            count: 0,
            page: 1,
            sortParams: { name: 'asc' }
        };

        const result = await post < {list : IUser[]}>(ODIN_USER.QUERY_BY_USER, params);

        if (result) {
            const { list } = result;
            this.userList = list;
        }
    };

    get copyUsers() {
        const copyUsers = {};

        this.userList.forEach((each: IUser) => {
            const temp = {
                id: each.id,
                employeeNo: each.employeeNo,
                name: each.name,
                departmentName: each.departmentName,
                email: each.email
            };

            copyUsers[temp.id] = temp;
            copyUsers[temp.employeeNo] = temp;
        });

        return copyUsers;
    }

    logout(cb: any) {
        this.message = null;
        window.location.href = `${ODIN_USER.IAM_LOG_OUT}?callback=${cb}?needLogout`;
    }

    setLogin(user: IUser) {
        this.user = user;
        this.isLogin = true;
        storageUtil.seedUser = { value: this.user };
    }

    setLogout() {
        this.user = {};
        this.isLogin = false;
        storageUtil.seedUser = {};
    }
}

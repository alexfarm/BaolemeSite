import {
    observable, action, makeObservable
} from 'mobx';
import CommonObject from './base/CommonObject';
import API from '../constant/API';
import { get } from '../util/request';

export interface AdSwiperList {
    type: string;
}

export default class AD extends CommonObject<AdSwiperList> {
    constructor() {
        super();
        makeObservable(this);
    }

    @observable adList: AdSwiperList[] = [];

    @action.bound
    getAll = async () => {
        this.adList = await get(API.AD_LIST_ALL);
    }
}

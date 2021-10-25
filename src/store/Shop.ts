import {
    observable, flow, action, makeObservable, computed, runInAction
} from 'mobx';
import CommonObject from './base/CommonObject';
import { get } from '../util/request';
import API from '../constant/API';

export interface IShop {
    id: number,
    name: string,
    rate?: number,
    site?: string,
    distance?: string,
    tag?: string,
    tags: any[]
    img: string
}

export default class Shop extends CommonObject<IShop> {
    constructor() {
        super();
        makeObservable(this);
    }

    @observable
    searchString = '';
    
    @observable
    showNullResult = false;

    @observable
    searchList: IShop[] = [];

    @observable
    shopDetail?: IShop;

    @observable
    detailTags: any[] = [];

    hotSearchList = [
        {
            id: 1,
            value: '咖啡'
        },{
            id: 2,
            value: '周末去哪聚餐'
        },{
            id: 3,
            value: '下午茶'
        },{
            id: 4,
            value: '火锅'
        },{
            id: 5,
            value: '烧烤'
        },{
            id: 6,
            value: '有包厢的餐厅'
        }
    ]

    @action.bound
    getDetail = async (id: string) => {

        this.shopDetail = await get(API.SHOP_DETAIL, {
            params: {
                id
            }
        });
        this.detailTags = this.shopDetail.tags;
    }

    @action.bound
    search = async (searchString: string) => {
        this.initStore();
        this.searchString = searchString;
        const res = await get(API.SHOP_SEARCH, {
            params: {
                content: this.searchString
            }
        });
        runInAction(() => {
            if (res.length > 0) {
                this.searchList = res;
            } else {
                this.showNullResult = true;
                
            }
        });
    }

    @action.bound
    initStore = () => {
        this.searchList = [];
        this.showNullResult = false;
    }
}

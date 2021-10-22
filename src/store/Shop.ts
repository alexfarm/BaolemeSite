import {
    observable, flow, action, makeObservable, computed
} from 'mobx';
import CommonObject from './base/CommonObject';

export interface IShop {
    id: number,
    name: string,
    rate?: number,
    position?: string,
    distance?: string,
    tag?: string,
    img: string
}

export default class Shop extends CommonObject<IShop> {
    constructor() {
        super();
        makeObservable(this);
        this.getAll();
    }

    @observable
    searchString = '';

    @observable
    searchList: IShop[] = [];

    @action.bound
    getAll = async () => {
        this.list = [
            {
                id: 1,
                name: '星巴克(唐镇来安路店)',
                rate: 4.6,
                position: '上海市普东新区来安路666号',
                distance: '37m',
                tag: '咖啡饮料',
                img: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
            },
            {
                id: 2,
                name: '2星巴克(唐镇来安路店)',
                rate: 2.6,
                position: '上海市普东新区来安路666号',
                distance: '37m',
                tag: '咖啡饮料',
                img: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
            }
        ];
    }

    @action.bound
    getDetail = async () => {
        this.detail = {
            id: 1,
            name: '星巴克(唐镇来安路店)',
            rate: 4.6,
            position: '上海市普东新区来安路666号',
            distance: '37m',
            tag: '咖啡饮料',
            img: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
        };
    }

    mockGetUsername(): Promise<string> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('12');
            }, 1000);
        });
    }

    @action.bound
    search = async (searchString: string) => {
        this.searchString = searchString;

        const userName: string = await this.mockGetUsername();

        this.searchList = [
            {
                id: 1,
                name: '星巴克(唐镇来安路店)',
                rate: 4.6,
                position: '上海市普东新区来安路666号',
                distance: '37m',
                tag: '咖啡饮料',
                img: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
            }
        ];
    }

    @computed get length() {
        return this.list.length;
    }
}

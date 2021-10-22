import { observable, action, makeObservable } from 'mobx';

export interface ICommonObjectStore<T> {
    list: T[];
    detail: T | null;
    listLoading: boolean;
    detailLoading: boolean;
    setDetail(detail: T): void;
    setListLoading(loading: boolean): void;
    setDetailLoading(loading: boolean): void;
    reset(): void
}

export default class CommonObject<T> implements ICommonObjectStore<T> {
    constructor() {
        makeObservable(this);
    }

    @observable
    public list: T[] = [];

    @observable
    public detail: T | null = null;

    @observable
    public listLoading = false;

    @observable
    public detailLoading = false;

    @action.bound
    public setDetail = (detail: T):void => {
        this.detail = detail;
    };

    @action.bound
    public setListLoading = (loading: boolean):void => {
        this.listLoading = loading;
    };

    @action.bound
    public setDetailLoading = (loading: boolean):void => {
        this.detailLoading = loading;
    };

    @action.bound
    public reset(): void {
        this.list = [];
        this.detail = null;
        this.listLoading = false;
        this.detailLoading = false;
    }
}

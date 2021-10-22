import React from 'react';
import User from './User';
import Shop from './Shop';
import Advertisement from './Advertisement';

class RootStore {
    userStore: any;

    shopStore: any;

    adStore: any;

    constructor() {
        this.userStore = new User();
        this.shopStore = new Shop();
        this.adStore = new Advertisement();
    }
}

export const stores = new RootStore();

export const AppContext = React.createContext(stores);

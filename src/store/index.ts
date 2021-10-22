import React from 'react';
import Shop from './Shop';
import Advertisement from './Advertisement';

class RootStore {
    userStore: any;

    shopStore: any;

    adStore: any;

    constructor() {
        this.shopStore = new Shop();
        this.adStore = new Advertisement();
    }
}

export const stores = new RootStore();

export const AppContext = React.createContext(stores);

const {
    SERVER_ADDRESS
} = ENV_CONFIG;

const API = {
    AD_ADD: 'ad/all',
    SHOP_LIST_ALL: 'shop/all/',
    SHOP_SEARCH: 'shop/seach',
    SHOP_GET_BY_ID: 'shop/getById'
};

Object.keys(API).forEach((apiName) => {
    API[apiName] = SERVER_ADDRESS + API[apiName];
});

Object.freeze(API);

export default {
    API
};
const {
    SERVER_ADDRESS
} = ENV_CONFIG;

const API: any = {
    SHOP_SEARCH: 'search.json',
    AD_LIST_ALL: 'advertisement/all.json',
    SHOP_DETAIL: 'merchant/detail.json'
};

Object.keys(API).forEach((apiName) => {
    API[apiName] = SERVER_ADDRESS + API[apiName];
});

Object.freeze(API);

export default API;

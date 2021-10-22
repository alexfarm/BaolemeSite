import {
    observable, flow, action, makeObservable, computed
} from 'mobx';
import CommonObject from './base/CommonObject';

export interface IAD {
    id: number,
    name: string,
    img?: string,
    link: string
}

export default class AD extends CommonObject<IAD> {
    constructor() {
        super();
        makeObservable(this);
        this.getAll();
    }

    @action.bound
    initSocket(window:Window) {
        const websocket = new WebSocket('ws://localhost:8080/ws?');

        // 连接发生错误的回调方法
        websocket.onerror = function () {
            console.log('WebSocket连接发生错误');
        };

        // 连接成功建立的回调方法
        websocket.onopen = function () {
            console.log('WebSocket连接成功');
        };

        // 接收到消息的回调方法
        websocket.onmessage = function (event) {
            console.log(event.data);
        };

        // 连接关闭的回调方法
        websocket.onclose = function () {
            console.log('WebSocket连接关闭');
        };

        // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = function () {
            websocket.close();
        };
    }

    @action.bound
    getAll = async () => {
        this.list = [
            {
                id: 1,
                name: '饮料优惠推荐',
                link: ''
            },
            {
                id: 2,
                name: '精选火锅',
                link: ''
            }
        ];
    }
}

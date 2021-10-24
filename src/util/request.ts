import axios, {
    AxiosRequestConfig, AxiosResponse
} from 'axios';
import { message } from 'antd';
import qs from 'qs';
import { v4 as uuid } from 'uuid';
import { METHOD } from '../constant/http';

message.config({
    top: 80,
    duration: 5,
    maxCount: 3
});
const userFlag = uuid();

export interface IResponse<T = any> {
    respCode: string;
    respMsg: string;
    respData?: T
}

function responseHandler(response: AxiosResponse<IResponse & {url: string}>): any {
    return response.data;
}

function errorHandler(err: any) {
    if (err && err.response && err.response.status) {
        err.message.error(`网络错误：${err}`);
    } else {
        err.message.error(err);
    }

    return null;
}

function request<T>(
    options: AxiosRequestConfig,
    setLoading?: (loading: boolean) => void
): (Promise<T>) {
    if (setLoading) {
        setLoading(true);
    }

    return axios(options).then((res: any) => {
        if (setLoading) {
            setLoading(false);
        }

        return responseHandler(res);
    }).catch((err) => {
        errorHandler(err);
    });
}

export function get<T>(
    url: string,
    setLoading?: (loading: boolean) => void,
    params?: AxiosRequestConfig
): Promise<T> {
    return request<T>({
        method: METHOD.POST,
        headers: {
            'X-USER-FLAG': userFlag
        },
        url,
        ...params
    }, setLoading);
}

export function post<T>(
    url: string,
    data = {},
    setLoading?: (loading: boolean) => void,
    params?: AxiosRequestConfig
): Promise<T> {
    return request<T>({
        method: METHOD.POST,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url,
        data: qs.stringify(data),
        ...params
    }, setLoading);
}

export function postJson<T>(
    url: string,
    data = {},
    setLoading?: (loading: boolean) => void,
    params?: AxiosRequestConfig
): Promise<T> {
    return request<T>({
        method: METHOD.POST,
        headers: { 'Content-Type': 'application/json' },
        url,
        data,
        ...params
    }, setLoading);
}

export default request;

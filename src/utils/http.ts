import { extend } from 'umi-request';
import { history } from 'umi';
import { notification, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Crypto from '@/utils/crypto';

const target:{[k:string]: any} = {
  dev: '',
  test: '',
  prod: '',
}

const prefix = target[GLOBAL_ENV || 'dev'];

const request = extend({
  prefix,
  errorHandler: ({ response }: { response: Response }) => {
    if(!response) {
      notification.error({
        key: 'updatable',
        message: '网络异常操作失败，请稍后重试',
      });
    }
    return response;
  },
});


// 全局请求拦截
request.interceptors.request.use((url, options) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token') || '',
  }
  return {
    url,
    options: {
      ...options,
      headers,
    },
  }
}, { global: true });

request.interceptors.response.use(async (response: any) => {
  const res = await response.clone().json();
  const data: any = await Crypto.decrypt(res);



  return data
});

export default request;



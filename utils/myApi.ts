import {rootUrl} from '@config/api'
import {message} from 'antd';
import fetch from 'isomorphic-fetch';

const myApi =
    async (url: string, method?: string, data?: any, msg?: boolean) => {
  try {
    method = method ? method : 'get';
    let res = await fetch(`${rootUrl}/${url}`, {
                method,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
              }).then(res => res.json());
    if (res.code === 200) {
      if (msg) {
        message.success('修改成功')
      }
      return res.data;
    }
  } catch (error) {
    console.log('error', error);
    message.error('请求失败');
  }
};
const fetchArticles = async (page: number, cate?: string|string[]) => {
  if (cate instanceof Array) {
    return [];
  } else {
    const res = cate ?
        await myApi(
            `article?cate=${cate}&page=${page}&page_size=10&order=DESC`) :
        await myApi(`article?page=${page}&page_size=10&order=DESC`);
    return res;
  }
};

export default myApi;
export {fetchArticles}

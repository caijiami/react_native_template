// 获取actionType中的全部状态，需要哪个就用哪个
import * as types from '../constant/ActionTypes';

// 网络请求的网址和网络请求的方法
// import {IP} from '../common/Config';
// import util from '../common/util';

import { AsyncStorage } from 'react-native';
// 存储信息的KEY
let KEY = 'USERTOKEN';

// 这个方法是请求网络，获取Token的方法
// 识兔中调用这个方法之后，需要判断是否存在userToken，不存在请求网络并保存，存在直接调用返回
export function userToken() {
    return dispatch => {
        // return util.getAxios(IP.getUserToken,(data)=>{
        //     AsyncStorage.getItem(KEY,(Error,result)=>{
        //         if (result === null){
        //             Request.get(Config.api.getUserToken,(data)=>{
        //                 // console.log(data);
        //                 if (data && data.success){
        //                     let token = data.token;
        //                     AsyncStorage.setItem(KEY,token,(error)=>{
        //                         if (error){
        //                             console.log('存储失败' + error);
        //                         }else {
        //                             console.log('存储成功');
        //                             // dispatch发送数据到Reducer里面
        //                             dispatch(getUserToken(token));
        //                         }
        //                     })
        //                 }
        //             },(error)=>{
        //                 console.log(error);
        //             })
        //         }else {
        //             console.log('获取成功' + result);
        //             dispatch(getUserToken(result));
        //         }
        //     });
        //
        // },(error)=>{
        //     console.log(error);
        //     dispatch({type: types.USER_TOKEN_ERROR, error: error});
        // });
    }
};

// 如果()括号里面的参数`userToken`和Reducer里面的初始参数一样，就可以不用键：值的写法，直接返回就好。
export function getUserToken(userToken) {
    return {
        // type是必要参数，通过type值判断
        type: types.USER_TOKEN_SUCCESS,
        userToken
    }
}

export function inAppHome() {
    return {
        // type是必要参数，通过type值判断
        type: types.APP_HOME_IN,
    }
}

export function outAppHome() {
    return {
        // type是必要参数，通过type值判断
        type: types.APP_HOME_OUT,
    }
}
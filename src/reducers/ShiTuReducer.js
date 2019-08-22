// ActionTypes里面存放着App中可能发生的情况
import * as types from '../constant/ActionTypes';

// 初始化值
const initialState = {
    imageURL: 'timg',
    homeState: 1,
    userToken:''
};

// 导出ShiTuReducer。
export default function ShiTuReducer(state = initialState, action){
    // console.log(action);

    // 通过switch来判断types的值，在action中实现功能
    switch (action.type) {
        // 当type=USER_TOKEN_SUCCESS时，会将action中的值，
        // 赋给userToken，在ShiTu.js中就能拿到userToken的值。
        case types.USER_TOKEN_SUCCESS:
            // console.log(action);
            return Object.assign({}, state, {
                ...state,
                userToken: action.userToken,
            });
        case types.APP_HOME_IN:
            // console.log(action);
            return Object.assign({}, state, {
                ...state,
                homeState:1
            });
        case types.APP_HOME_OUT:
            // console.log(action);
            return Object.assign({}, state, {
                ...state,
                homeState:2
            });
        default:
            return state;
    }
}
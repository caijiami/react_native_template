import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator'
import { BottomTabNavigator, Drawer}  from './TopNavigator';

import LoginPage from "./page/Users/Login";
// 自定义底部导航栏
import DrawerPage from './page/DrawerPage/DrawerPage';

//页面跳转路由器
const AppNavigator = createStackNavigator({
    login:{
        screen:LoginPage,
    },
    // 自定义底部导航
    drawerPage: {
        screen: DrawerPage,
    },
    //全部的抽屉导航
    DrawerNav:{
        screen:Drawer,
        navigationOptions:{
            title:"登录"
        }
    }
    }, {
        //首页路由设置  guidance    drawerPage
        initialRouteName: 'drawerPage',
        headerMode: 'float',
        transitionConfig:()=>({
            // 只要修改最后的forVertical就可以实现不同的动画了。forHorizontal从右到左  forVertical从下向上
            screenInterpolator:StackViewStyleInterpolator. forHorizontal,
        })
    },
    );
export default createAppContainer(AppNavigator);

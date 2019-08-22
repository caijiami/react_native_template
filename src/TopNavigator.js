import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { createBottomTabNavigator , createDrawerNavigator} from "react-navigation";

import Home from './page/Home/Home';
// import Management from './page/Management/Management';
import Users from './page/Users/Users';
import Order from './page/Order/Order';
import LoginPage from './page/Users/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';//图标库
import * as util from './common/util'

//底部导航栏的设置
export const  BottomTabNavigator=createBottomTabNavigator(
    {
        Home: { screen: Home },
        // Management: { screen: Management },
        Order: { screen:  Order },
        Users: { screen: Users },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `${focused ?'ios-aperture' :'ios-home'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                } else if (routeName === 'Management') {
                    iconName = `${focused ?'ios-people' :'ios-pulse'}`;
                }
                else if (routeName === 'Users') {
                    iconName = `ios-person${focused ? '' : '-add'}`;
                }
                else if (routeName === 'Order') {
                    iconName = `ios-folder${focused ? '' : '-open'}`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#0ba0e7',
            inactiveTintColor: 'gray',
        }
    }
)
BottomTabNavigator.navigationOptions = ({navigation}) => {
    let {routeName} = navigation.state.routes[navigation.state.index];
    // You can do whatever you like here to pick the title based on the route name
    let headerTitle;
    let headerLeft;
    if (routeName === 'Local') {
        headerTitle = <Text style={{ flex: 1, textAlign: 'center', marginRight:30}}>首页</Text>;
        headerLeft=(
            <Text  onPress={()=>navigatePress()} style={{marginLeft:5, width:30, textAlign:"center"}} >
                <Ionicons  name='ios-aperture'size={24} color='#000' />
            </Text>
        )
    } else if (routeName === 'Music') {
        headerTitle = <Text style={{ flex: 1, textAlign: 'center' }}>朋友圈</Text>
    }
    else if (routeName === 'Share') {
        headerTitle = <Text style={{ flex: 1, textAlign: 'center' }}>个人</Text>
    }
    return {
        header:null
    };
};



//抽屉导航
export const Drawer= createDrawerNavigator({
    login:{
        screen:LoginPage,
        navigationOptions:{
            drawerLabel:'用户登陆',
            drawerIcon: ({ tintColor }) => (
                <MaterialIcons
                    name="dns"
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    }
},{
    initialRouteName: 'login',
    drawerWidth:util.size.width,
    navigationOptions:{
        drawerLockMode:'locked-open', //抽屉锁定模式
    }
});






// export const TopTabNavigator = createMaterialTopTabNavigator({//在这里配置页面的路由
//     Page1: {
//         screen: Home,
//         navigationOptions: {
//             tabBarLabel: '我的',
//              // tabBarIcon: ({tintColor, focused}) => (
//              //     <Ionicons
//              //         name={'ios-home'}
//              //         size={26}
//              //         style={{color: tintColor}}
//              //    />
//              // ),
//         }
//     },
//     Page2: {
//         screen: MusicHall,
//         navigationOptions: {
//             tabBarLabel: '音乐馆',
//         }
//     },
//     Page3: {
//         screen: Share,
//         navigationOptions: {
//             tabBarLabel: '发现',
//         }
//     },
//     // Page4: {
//     //     screen: Share,
//     //     navigationOptions: {
//     //         tabBarLabel: '发现',
//     //     }
//     // },
// },
// {
//     tabBarOptions: {
//         tabStyle: {
//             width: 80
//         },
//         upperCaseLabel: false,//是否使标签大写，默认为true
//         scrollEnabled: true,//是否支持 选项卡滚动，默认false
//         // activeTintColor: 'white',//label和icon的前景色 活跃状态下（选中）
//         // inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
//         style: {
//             width: '100%',
//             height: 45,
//             backgroundColor: '#000',//TabBar 的背景颜色
//             // justifyContent:'center',
//             alignItems: 'center',
//         },
//         indicatorStyle: {
//             height: 0,
//         },//标签指示器的样式
//         labelStyle: {
//             fontSize: 13,
//             marginTop: 6,
//             marginBottom: 6,
//         },//文字的样式
//     },
// }
// )

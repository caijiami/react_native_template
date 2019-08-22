import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    AsyncStorage,
    BackHandler,
    Platform,
} from 'react-native';
import { Drawer,  Icon , Grid , List, Provider, Toast, Button} from '@ant-design/react-native';
import { IP , imageIp} from '../../common/Config';
import * as util from "../../common/util";
const Item = List.Item;
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/Home';
import Message from '../Message/Message';
import Users from '../Users/Users';
import Order from '../Order/Order';
import images from "../../imgAll";
import { connect } from 'react-redux'; // 引入connect函数
import {getUserToken} from "../../actions/ShiTuUserToken";


class DrawerPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        header:null,
    })
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home'
        };
    }

    componentDidMount () {
        const { navigation } = this.props;
        let index=navigation.getParam('index');
        if(index){
            this.setState({
                selectedTab:index
            })
        }
        // 通过addListener开启监听，可以使用上面的四个属性
        this._didFocusSubscription = this.props.navigation.addListener(
            'didFocus',
            payload => {
                if (Platform.OS === 'android') {
                    this.backBindPress=BackHandler.addEventListener('hardwareBackPress', ()=>this.onBackAndroid());
                }
            }
        );
        this._didBlurSubscription = this.props.navigation.addListener(
            'didBlur',
            payload => {
                if (Platform.OS === 'android') {
                    this.backBindPress.remove();
                }
            }
        );
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         let initialPosition = JSON.stringify(position);
        //         console.log(initialPosition)
        //     },
        //     (error) =>  console.log(error),
        //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        // );
    }
    componentWillUnmount() {
        // 在页面消失的时候，取消监听
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._didBlurSubscription && this._didBlurSubscription.remove();
    }

    // 定义监听到用户按Back键的处理函数
    onBackAndroid() {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            // this.props.navigation.navigate('guidance');
            return false;
        }
        this.lastBackPressed = Date.now();
        Toast.info('再按一次退出应用');
        return true;
    }
    // 抽屉导航栏改变事件
    onOpenChange = isOpen => {

    };

    //sidebar登录前后的render函数
    sidebarRender = () => {
       return null
    };


    drawerOpen=()=>{
        this.drawer && this.drawer.openDrawer()
    };

    render() {
        const sidebar = (
            <ScrollView style={{backgroundColor:'#fff'}}>
                <View style={{height:200,backgroundColor:'#d2d2d2',marginBottom:10}}>
                    {
                        this.sidebarRender()
                    }
                </View>
                <View>

                </View>
            </ScrollView>
        );
        return (
            <Provider>
                <View style={{width:'100%',height:'100%'}}>
                    <Drawer
                        sidebar={sidebar}
                        position="left"
                        open={false}
                        drawerRef={el => (this.drawer = el)}
                        onOpenChange={this.onOpenChange}
                        drawerBackgroundColor="#ccc"
                    >
                        <TabNavigator sceneStyle={{backgroundColor:'rgba(255,255,255,0.1)'}} tabBarStyle={{backgroundColor:'rgba(255,255,255,0.1)'}}>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'Home'}
                                title="主页"
                                renderIcon={() =>  <Icon name="read" color="#808080" />}
                                renderSelectedIcon={() =>  <Icon name="file-done" color="#808080" />}
                                onPress={() => this.setState({ selectedTab: 'Home' })}>
                                <Home pops={this.props} open={this.drawerOpen}/>
                            </TabNavigator.Item>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'Order'}
                                title="订单"
                                renderIcon={() => <Icon name="file-done" color="#808080" />}
                                renderSelectedIcon={() => <Icon name="read" color="#0094FF"/>}
                                onPress={() => this.setState({ selectedTab: 'Order' })}>
                                <Order pops={this.props}/>
                            </TabNavigator.Item>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'Message'}
                                title="消息"
                                renderIcon={() => <Icon name="message"  color="#808080"/>}
                                renderSelectedIcon={() =>  <Icon name="message" color="#808080" />}
                                onPress={() => this.setState({ selectedTab: 'Message' })}>
                                <Message pops={this.props}/>
                            </TabNavigator.Item>
                            <TabNavigator.Item
                                selected={this.state.selectedTab === 'Users'}
                                title="用户"
                                renderIcon={() => <Icon name="team"  color="#808080"/>}
                                renderSelectedIcon={() => <Icon name="user" color="#0094FF"/>}
                                onPress={() => this.setState({ selectedTab: 'Users' })}>
                                <Users pops={this.props}/>
                            </TabNavigator.Item>
                        </TabNavigator>
                    </Drawer>
                </View>
            </Provider>
        )
    }
}


const styles = StyleSheet.create({
    avatarText:{
        letterSpacing: 2,
        marginTop:20,
        color:"#fff",
        fontSize:18
    },
    bottomIcon:{
        height: 23,
        width:23
    }
});

// connect 连接 Recucer ，我ShiTu.js的Reducer叫ShiTuReducer，
// userToken等方法是我在action里面创建的，所以调用的也就是action方法
export default connect((state) => {
    const { ShiTuReducer } = state;
    return {
        ShiTuReducer
    };
},{ getUserToken})(DrawerPage)


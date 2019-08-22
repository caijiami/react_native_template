import React, { Component } from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Badge,Icon,WhiteSpace} from '@ant-design/react-native';
import { connect } from 'react-redux'; // 引入connect函数
import {Tab, TabHeading, Tabs} from 'native-base';
import {getUserToken} from "../../actions/ShiTuUserToken";
import images from "../../imgAll";
import Ionicons from "react-native-vector-icons/Ionicons";

class Order extends Component {
    static navigationOptions = {
        title: '订单',
    };

    constructor(props){
        super(props);
        this.state={

        };
    }


    render() {
        return (
            <ScrollView>
                <Text>订单</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

});

// connect 连接 Recucer ，我ShiTu.js的Reducer叫ShiTuReducer，
// userToken等方法是我在action里面创建的，所以调用的也就是action方法
export default connect((state) => {
    const { ShiTuReducer } = state;
    return {
        ShiTuReducer
    };
},{ getUserToken})(Order)

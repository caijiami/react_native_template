import React, { Component } from 'react';
import { View, Text, ScrollView,  TouchableOpacity, StyleSheet, Image} from 'react-native';
import {InputItem, Button, WingBlank, WhiteSpace, Provider, Toast, Icon} from '@ant-design/react-native';
import { connect } from 'react-redux';
import {getUserToken} from "../../actions/ShiTuUserToken";

class LoginPage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: '登录'
        };
    };
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount (){

    }


    render() {
        return (
            <Provider>
                <ScrollView>
                    <Text>登录页面</Text>
                </ScrollView>
            </Provider>
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
},{ getUserToken})(LoginPage)


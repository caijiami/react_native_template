import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import {getUserToken} from "../../actions/ShiTuUserToken";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }



    componentDidMount (){

    }


  render() {
    return (
        <ScrollView>
            <Text>主页</Text>
        </ScrollView>
    )
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
},{ getUserToken})(Home)


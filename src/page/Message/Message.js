import React, { Component } from 'react';
import { View, Text , ScrollView, Image , TouchableOpacity, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {Card, Icon, WhiteSpace, WingBlank} from '@ant-design/react-native';
import { connect } from 'react-redux';
import {getUserToken} from "../../actions/ShiTuUserToken";
import Ionicons from "react-native-vector-icons/Ionicons"; // 引入connect函数
import * as util from '../../common/util'

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
      let navigation=this.props.pops.navigation;
      return (
          <ScrollView>
              <Text>消息</Text>
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
},{ getUserToken})(Message)


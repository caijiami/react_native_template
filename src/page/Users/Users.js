import React, { Component } from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions , TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import {Icon, DatePicker, List, Picker, Provider, WingBlank, WhiteSpace, Badge} from "@ant-design/react-native";
import { Rating } from 'react-native-elements';
import {Row, Rows, Table} from 'react-native-table-component';
import {getUserToken} from "../../actions/ShiTuUserToken";
import {Echarts, echarts} from 'react-native-secharts';
// 导入action方法

const Item = List.Item;
const Brief = Item.Brief;
const CustomChildren = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View
            style={{
                height: 36,
                paddingLeft: 15,
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <Text style={{ flex: 1 ,color: '#000',fontSize:18}}>{props.children}</Text>
            <Text style={{ textAlign: 'right', color: '#000',fontSize:18, marginRight: 15 }}>
                {props.extra}
            </Text>
        </View>
    </TouchableOpacity>
);
const screenWidth = Dimensions.get('window').width

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

    componentDidMount(){
      // 查询加入的物流公司,结果设置到companyList中
    };


  render() {
      return (
          <ScrollView>
                <Text>用户</Text>
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
},{ getUserToken})(Users)



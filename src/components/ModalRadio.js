import React, { Component } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {
    Button,
    InputItem,
    List,
    SearchBar,
    Modal,
} from '@ant-design/react-native';
const ListItem = List.Item;
/*
* inputValue  input绑定的显示值
* containerText input的label名字
* requestData  模态框数据请求接口函数
* modalTitle  模态框标题
* modalPlaceholder 模态框搜索栏的placeholder
* list  遍历渲染数组[{label:'浙A44444'}]
* onPress  单击选择
* */

export default class ModalRadio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue:'',
            modalVisible:false
        };
    }


    // 关闭承运商弹窗
    onModalClose = () => {
        this.setState({
            searchValue:'',
            modalVisible: false,
        });
    };
    render() {
        const modalBtn = [
            { text: '关闭', onPress: () => this.onModalClose() },
        ];
        return (
            <View>
                <InputItem
                    value={this.props.inputValue?this.props.inputValue+'':''}
                    onChange={value => {

                    }}
                    onFocus={()=> {
                        this.setState({
                            modalVisible:true
                        });
                        this.props.requestData();
                    }}
                    labelNumber={6}
                >
                    {this.props.containerText}
                </InputItem>
                <Modal
                    title={this.props.modalTitle}
                    transparent
                    onClose={this.onModalClose}
                    maskClosable
                    visible={this.state.modalVisible}
                    closable
                    footer={modalBtn}
                >
                    <SearchBar
                        value={this.state.searchValue}
                        placeholder={this.props.modalPlaceholder}
                        onSubmit={value => console.log(value)}
                        onCancel={(value)=>this.props.requestData(value)}
                        onChange={(value)=>{
                            this.setState({searchValue:value})
                        }}
                        showCancelButton
                        cancelText='提交'
                    />
                    <List>
                        {
                            this.props.list.map((item,index)=>{
                                return (
                                    <ListItem onPress={() =>{ this.props.onPress(index);this.onModalClose()}} key={index}>
                                        <Text>{item.label}</Text>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Modal>
        </View>
        );
    }
}

const styles = StyleSheet.create({

});

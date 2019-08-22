import React, { Component } from 'react';
import {View, StyleSheet, Linking, TouchableOpacity, Image} from 'react-native';

/*
* phoneNum  需要打得电话号码
* */

export default class PhoneCall extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <TouchableOpacity onPress={()=>{return Linking.openURL('tel:'+this.props.phoneNum);}}>
                <Image source={require("../images/phone.png")} style={styles.phoneIcon}></Image>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    phoneIcon:{
        width:30,
        height:30
    }
});

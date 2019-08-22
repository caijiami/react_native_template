import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';

export default class LineBox extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <View style={{
                backgroundColor:'#f5f5f5',
                height:this.props.lineHig,
                width:'100%'}}></View>
        );
    }
}

const styles = StyleSheet.create({
    lineBox: {

    }
});

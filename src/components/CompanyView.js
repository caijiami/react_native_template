import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Text,
    View
} from 'react-native';
import TopMenu from "./TopMenu";
const {width, height} = Dimensions.get('window');

const CONFIG = [
    {
        type:'subtitle',
        selectedIndex:0,
        data:[
            {title:'发货地', subtitle:'1200m'},
            {title:'周边距离', subtitle:'300m'},
            {title:'近一个月货源量', subtitle:'200m'},
        ]
    },
    {
        type:'title',
        selectedIndex:0,
        data:[
            {
            title:'评论'
            },
            {
            title:'货源量'
            },
            {
            title:'周边距离'
            },
        ]
    }
];


export default class CompanyView extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:{}
        };
    }

    renderContent=()=>{
        return (
            <TouchableOpacity >
                <Text style={styles.text}>index:{this.state.index} subindex:{this.state.subindex} title:{this.state.data.title}</Text>
            </TouchableOpacity>
        );
    };

    onSelectMenu=(index, subindex, data)=>{
        this.setState({index, subindex, data});
    };

    render() {
        return (
            <View style={styles.container}>
                {/*<FoodActionBar/>*/}
                {/*<Separator/>*/}
                <TopMenu style={styles.container} config={CONFIG} onSelectMenu={this.onSelectMenu} renderContent={this.props.renderContent}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width,
        // backgroundColor: '#F5FCFF',
        height:height
    },
    text: {
        fontSize:20,
        justifyContent: 'center',
        alignItems: 'center',

    },

});
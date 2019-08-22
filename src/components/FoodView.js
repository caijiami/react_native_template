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
            {title:'下单公司', subtitle:'1200m'},
            {title:'要求提货时间', subtitle:'300m'},
            {title:'要求送货时间', subtitle:'200m'},
            {title:'订单派发时间', subtitle:'500m'},
        ]
    },
    {
        type:'title',
        selectedIndex:0,
        data:[{
            title:'订单号'
        }, {
            title:'要求提货时间'
        }, {
            title:'要求送货时间'
        }, {
            title:'订单派发时间'
        }]
    }
];


export default class FoodView extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:{}
        };
    }

    // renderContent=()=>{
    //     return (
    //         <TouchableOpacity >
    //             <Text style={styles.text}>index:{this.state.index} subindex:{this.state.subindex} title:{this.state.data.title}</Text>
    //         </TouchableOpacity>
    //     );
    // };

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
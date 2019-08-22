import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Button,
} from 'react-native';

/*
*  父组件触发该组件内的方法
*  onPress=(val)=>{
        this.child.openMenu()
    };
*  组件示例用法
* <MenuList data={data} nSelected={1} tabSelected={0} click={this.onPress} onRef={this.onRef}/>
*
* */


//设定内置的属性
//选中项，例如：_type_0_2 表示第一个Tab选中，并且第二个Tab中的第三项选中
var prefixType = '_type_';

//选中项样式，例如：_style_0_2 表示第一个Tab选中，并且第二个Tab中的第三项选中时的样式
var prefixStyle = '_style_';

//默认左侧选中的背景颜色
var defaultBackgroundColor = {backgroundColor:'#fff'};

export default class MenuList extends React.Component{
    constructor() {
        super();
        this.state = {
            visb:false
        };
    }
    componentDidMount(){
        this.props.onRef(this)
        let obj=this.state;
        this.setState({
            ...obj,
            ...this.getInitialState()
        })
    }
    getInitialState=()=>{
        var data = this.props.data;
        //左侧选择的index
        var nSelected = this.props.nSelected;
        //头部选择的index
        var tabSelected = this.props.tabSelected;
        var obj = {};
        var kIndex = 0;
        for(var k in data){
            var childData = data[k];
            var cIndex = 0;
            for(var c in childData){
                var type = prefixType + k + '_' + c;
                var style = prefixStyle + k + '_' + c;
                obj[type] = false;
                obj[style] = {};
                //设定默认选中项
                if(nSelected === cIndex && tabSelected === kIndex){
                    obj[type] = true;
                    obj[style] = defaultBackgroundColor;
                }
                cIndex++;
            }
            kIndex++;
        }
        obj.tabSelected = tabSelected;
        obj.nSelected = nSelected;
        return obj;
    }
    //渲染头部TabBar
    renderlHeader  =()=>{
        var data = this.props.data;
        var tabSelected = this.state.tabSelected;
        var header = [];
        var tabIndex = 0;
        for(var i in data){
            var tabStyle = null;
            if(tabIndex === tabSelected){
                tabStyle=[styles.header_text, styles.active_blue];
            }else{
                tabStyle = [styles.header_text];
            }
            header.push(
                <TouchableOpacity style={[styles.flex_1, styles.center]}
                                  onPress={this.headerPress.bind(this, i)}
                                  key={i}>
                    <Text style={tabStyle}>{i}</Text>
                </TouchableOpacity>
            );
            tabIndex ++;
        }
        return header;
    }
    //渲染左侧
    renderLeft  =()=>{
        var data = this.props.data;
        var tabSelected = this.state.tabSelected;
        var leftPannel = [];
        var index = 0;
        for(var i in data){
            if(index === tabSelected){
                for(var k in data[i]){
                    var style = this.state[prefixStyle + i + '_' + k];
                    leftPannel.push(
                        <Text onPress={this.leftPress.bind(this, i, k)}
                              style={[styles.left_row, style]}
                              key={k}>  {k}</Text>);
                }
                break;
            }
            index ++;
        }
        return leftPannel;
    }
    //渲染右边，二级菜单
    renderRight  =()=>{
        var data = this.props.data;
        var tabSelected = this.state.tabSelected;
        var nSelected = this.state.nSelected;
        var index = 0;
        var rightPannel = [];
        for(var i in data){
            if(tabSelected === index ){
                for(var k in data[i]){
                    if(this.state[prefixType + i + '_' + k]){
                        for(var j in data[i][k]){
                            rightPannel.push(
                                    <Text onPress={this.props.click.bind(this,data[i][k][j])} style={styles.left_row}  key={j}>{data[i][k][j]}</Text>
                                );
                        }
                        break;
                    }
                }
            }
            index ++;
        }
        return rightPannel;
    }
    //点击左侧，展示右侧二级菜单
    leftPress =(tabIndex, nIndex)=>{
        var obj = {};
        for(var k in this.state){
            //将prefixType或者prefixStyle类型全部置false
            if(k.indexOf(prefixType) > -1){
                var obj = {};
                obj[k] = false;
                this.setState(obj);
            }
            if(k.indexOf(prefixStyle) > -1){
                var obj = {};
                obj[k] = {};
                this.setState(obj);
            }
        }
        obj[prefixType + tabIndex + '_' + nIndex] = true;
        obj[prefixStyle + tabIndex + '_' + nIndex] = defaultBackgroundColor;
        this.setState(obj);
    }
    //头部点击事件即Tab切换事件
    headerPress =(title)=>{
        let visb=this.state.visb;
        var data = this.props.data;
        let tabSelected=this.state.tabSelected;
        let list=Object.keys(data);
        console.log(list.indexOf(title));
        if(tabSelected===list.indexOf(title)&&visb){
            this.setState({
                visb: false,
            });
            return
        }
        var index = 0;
        this.setState({
            visb: true,
        });
        for(var i in data){
            if(i === title){
                this.setState({
                    tabSelected: index,
                });
                var obj = {};
                var n = 0;
                for(var k in data[i]){
                    if(n !== 0){
                        obj[prefixType + i + '_' + k] = false;
                        obj[prefixStyle + i + '_' + k] = {};
                    }else{
                        obj[prefixType + i + '_' + k] = true;
                        obj[prefixStyle + i + '_' + k] = defaultBackgroundColor;
                    }
                    n ++;
                }
                this.setState(obj);
            }
            index ++;
        }
    }
    // 关闭选择框
    openMenu=()=>{
        this.setState({
            visb: false,
        });
    };
    render (){
        var header = this.renderlHeader();
        var left = this.renderLeft();
        var right = this.renderRight();
        return (
            <View style={styles.container}>
                <View style={[styles.row, styles.header]}>
                    {header}
                </View>
                {
                    this.state.visb&&( <View style={styles.row}>
                        <ScrollView style={ styles.left_pannel}>
                            {left}
                        </ScrollView>
                        <ScrollView style={ styles.right_pannel}>
                            {right}
                        </ScrollView>
                    </View>)
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:240,
        flex:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#ddd'
    },
    row:{
        flexDirection: 'row',
        height:200
    },
    flex_1:{
        flex:1
    },
    header:{
        height:35,
        borderBottomWidth:1,
        borderColor:'#DFDFDF',
        backgroundColor:'#F5F5F5'
    },
    header_text:{
        color:'#7B7B7B',
        fontSize:15
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    left_pannel:{
        backgroundColor:'#F2F2F2',
    },
    left_row:{
        height:30,
        lineHeight:20,
        fontSize:14,
        color:'#7C7C7C',
    },
    right_pannel:{
        marginLeft:10
    },
    active_blue:{
        color: '#00B7EB'
    },
    active_fff:{
        backgroundColor:'#fff'
    },
    btn_style:{
        height:30,
        width:"100%",
    }
});






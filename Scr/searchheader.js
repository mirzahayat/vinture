import React, { Component } from 'react';
import { View, Text,Image,Dimensions, Button, TouchableOpacity, FlatList} from 'react-native';
import {Left, Right} from 'native-base'
const width = Dimensions.get('screen').width;
export default class searchheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    fetchimage=()=>{
        fetch('https://api.unsplash.com/')
        .then(res=> res.json())
        .then(resp=>{
            console.log(resp)
        })
    }
    componentDidMount=()=>{

    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',width:width, height:70 ,justifyContent:'space-between'}}>
                   <View >
                   <Image source={require('./logo.png')} style={{marginTop:10,width:50 , height: 50 , backgroundColor:'transparent' ,borderRadius:50,}}/>
                   </View>
                   <View style={{alignItems:'center', justifyContent:'center'}}>
                       <Text>675</Text>
                       <Text>Posts</Text>
                   </View>
                   <View style={{alignItems:'center', justifyContent:'center'}}>
                       <Text>675 M</Text>
                        <Text>Followes</Text>
                   </View>
                   <View style={{alignItems:'center', justifyContent:'center',marginEnd:20}}>
                       <Text>123</Text>
                       <Text>Following</Text>
                   </View>
                </View>
                <View>
                    <Text>
                        Apple
                    </Text>
                    <Text style={{fontSize:12, fontWeight:'normal'}}>
                    Everone has a stor to fall 
                    </Text>
                    <Text style={{fontSize:12, fontWeight:'normal'}}>
                    Everone has a stor to fall 
                    </Text>
                    <Text style={{fontSize:12, fontWeight:'normal'}}>
                    Everone has a stor to fall 
                    </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10, height:30, marginTop:10}}>
                    <TouchableOpacity style={{width:120,backgroundColor:'red', borderRadius:5,borderWidth:0.5}}>
                        <Text style={{textAlign:'center', justifyContent:'center',marginTop:5}}>
                            Followe
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:120,backgroundColor:'white', borderRadius:5, borderWidth:0.5}}>
                        <Text style={{textAlign:'center', justifyContent:'center',marginTop:5}}>
                            Message
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:45,backgroundColor:'white', borderRadius:5, borderWidth:0.5}}>
                        <Text style={{textAlign:'center', justifyContent:'center',marginTop:5}}>
                            Hello
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <FileList data={{}} /> */}
            </View>
        );
    }
}

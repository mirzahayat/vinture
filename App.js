import { Header, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableWithoutFeedback, Alert, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Scr/Home';
import Search from './Scr/Search';
import Add from './Scr/Add';
import Favourite from './Scr/Favourit';
import Profile from './Scr/Profile';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [false, false, false, false],
      screenno: 1,
      name:''
    };
  }
  seletedScreen = () => {
    if (this.state.screenno === 1) {
        return (<Home />);
    } else if (this.state.screenno === 2) {
        return (<Search />);
    }else if (this.state.screenno === 3) {
        return (<Add />);
    }else if (this.state.screenno === 4) {
        return (<Favourite />);
    }
    else if (this.state.screenno === 5) {
      return (<Profile />);
  }
}
UpdateScreen(i) {
    this.setState({ screenno: i })
}

  render() {
    return (
      <>
      <StatusBar hidden />
      <Header style={{backgroundColor:'white'}} >
        <Left>
        <Icon name='left-arrow' style={{color:'black',fontSize:22}} />
        </Left>
        <Text style={{justifyContent:'center',alignItems:'center',marginTop:15,fontSize:20, color:'black'}}>Apple</Text>
        <Right>
        <Icon name='cog' style={{color:'black',fontSize:22}} />
        </Right>
      </Header>
      <View style={styles.container}> 
      <View style={styles.body}>
     {this.seletedScreen()}
      </View>
      <View style={styles.footer}>
      <TouchableWithoutFeedback onPress={()=>{this.UpdateScreen(1)}}>
       <View style={{marginLeft:'7%',marginTop:'2%' }} >
         <Icon name='home' style={{color:'black',fontSize:22}} />
         <Text style={{color:'black',fontSize:10}}>
           Home
         </Text>
       </View>
       </TouchableWithoutFeedback>
       <TouchableWithoutFeedback onPress={()=>{this.UpdateScreen(2)}}>
       <View style={{marginTop:'2%'}}>
         <Icon name='spinner' style={{color:'black',fontSize:22}} />
         <Text style={{color:'black',fontSize:10}}>
           Search
         </Text>
       </View>
       </TouchableWithoutFeedback>
       <TouchableWithoutFeedback onPress={()=>{this.UpdateScreen(3)}}>
       <View style={{marginEnd:'5%', marginTop:'2%'}} >
         <Icon name='ellipsis-v' style={{color:'black',fontSize:22,marginLeft:6}} />
         <Text style={{color:'black' , fontSize:10,}}>
           Profile
         </Text>
       </View>
       </TouchableWithoutFeedback>
       <TouchableWithoutFeedback onPress={()=>{this.UpdateScreen(4)}}>
       <View style={{marginEnd:'5%', marginTop:'2%'}} >
         <Icon name='ellipsis-v' style={{color:'black',fontSize:22,marginLeft:6}} />
         <Text style={{color:'black' , fontSize:10,}}>
           Profile
         </Text>
       </View>
       </TouchableWithoutFeedback>
       <TouchableWithoutFeedback onPress={()=>{this.UpdateScreen(5)}}>
       <View style={{marginTop:'2%'}} >
         <Icon name='user' style={{color:'black',fontSize:22,marginLeft:2}} />
         <Text style={{color:'black',fontSize:10}}>
           Add
         </Text>
       </View>
       </TouchableWithoutFeedback>
      </View>
      </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center'
  },
  body:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  },
  footer:{
      backgroundColor:'white',
      height:50,
      flexDirection:'row',
      justifyContent:'space-between',
  },
});

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Scontent from './searchcontent';
import Sheader from './searchheader';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Sheader />
        <Scontent />

      </View>
    );
  }
}

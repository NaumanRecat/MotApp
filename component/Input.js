import React from "react";
import {Image, Text, TextInput, View} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

const Input =()=>{
    return(
       <View> 
      <View style={{
        alignItems:'center'
      }}>
      <TextInput style={{
            height: h('7%'),
            width:w('85%'),
            borderWidth:1,
            borderRadius: h('1%'),
        }} placeholder="Type your text here"/>
      </View>
       </View>
    )
}
export default Input
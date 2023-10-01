import React from "react";
import {Image, Text, TextInput, View} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

const Input =(props)=>{
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
        }} placeholder={props.Text} onChangeText={props.onChangeText} />
      </View>
       </View>
    )
}
export default Input
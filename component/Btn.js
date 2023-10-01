import React from "react";
import {Button, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

const Btn =(props)=>{
    return(
      <View style={{
        alignItems:'center',
        
      }}>
        <TouchableOpacity onPress={props.onPress} style={{
          borderWidth:1,
          height: h('6%'),
          width:w('85%'),
          borderRadius: h('20%'),
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'black'
        }}>
          <Text style={{ color: 'white'}}> {props.Text} </Text>
        </TouchableOpacity>
      </View>
    )
}
export default Btn
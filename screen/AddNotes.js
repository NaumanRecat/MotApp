import React from "react";
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

const AddNotes =(props)=>{
    return(
        <View style={{
            flex:1,
            height:h('100%'),
            width:w('100%'),
        }}>
            <Text style={{fontSize:25, color:'white', marginTop:5}}> + </Text>
          
        </View>
    )
}
export default AddNotes
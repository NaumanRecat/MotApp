import React from "react";
import {View, Text, Button, TouchableOpacity} from 'react-native';
import AddNotes from './AddNotes'
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

const Notes =(props)=>{
    return(
        <View style={{
            flex:1,
            height:h('100%'),
            width:w('100%'),
            alignItems:'flex-end',
            justifyContent:'flex-end',
            marginBottom: h('5%'),
        }}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('AddNotes')} style={{height:50,width:50, borderWidth:1, borderRadius:50, backgroundColor:'black', alignItems:'center', marginRight: h('5%')}}>
            <Text style={{fontSize:25, color:'white', marginTop:5}}> + </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Notes
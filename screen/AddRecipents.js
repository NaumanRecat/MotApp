import React from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Input from "../component/Input";
import Btn from "../component/Btn";


const AddRecipients =()=>{
    return(
        <View style={{height: h('100%'), width:w('100%'), paddingLeft: w('8%'), paddingRight: w('8%'), marginTop: h('7%') }}>

            <View style={{
                alignItems:'center',
                justifyContent:'center',
            }}>
            <TouchableOpacity style={{
                height:h('15%'),
                width:w('30%'),
                borderWidth:1,
                borderRadius: h('10%')
            }}>
            
            </TouchableOpacity>
            </View>


            <Text style={{marginBottom: h('1%',)}}>Full Name</Text>
            <Input Text={'Type your Full Name'}/>

            <Text style={{marginBottom: h('1%'), marginTop:h('1%')}}>Email</Text>
            <Input Text={'Type your Email'}/>

            <View style={{marginTop:h('2%')}}>
            <Btn Text={'Create'} onPress={()=>props.navigation.navigate('Registration')} />
            </View>

        </View>
    )
}
export default AddRecipients
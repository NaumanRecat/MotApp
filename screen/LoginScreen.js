import React from "react";
import {Image, Text, View} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Input from '../component/Input';
import Btn from "../component/Btn";

const LoginScreen =(props)=>{
    return(
       <View style={{height: h('100%'), width:w('100%'), paddingLeft: w('8%'), paddingRight: w('8%'), marginTop: h('7%')}}>
        <View ><Text style={{ fontSize: 30, fontWeight:'900'}}> Let's Login</Text></View>
        <Text style={{ marginTop: h('3%'), marginBottom:h('3%')}}>Add notes to your idea</Text>
        <Text style={{marginBottom: h('1%',)}}>Email Address</Text>
        <Input Text={'Type your email'}/>
        <Text style={{ marginTop:h('3%'), marginBottom:h('1%')}}>Password</Text>
        <Input Text={'Type your password'}/>
        <Text style={{ marginTop:h('2%'), marginBottom:h('4%'), fontWeight:'bold'}}> Forgot Password</Text>
        <Btn Text={'Login'} onPress={()=>props.navigation.navigate('Registration')} />
        <Text style={{marginTop:h('3%'), marginBottom:h('2%'), textAlign:'center'}} > Or</Text>
        <Text style={{textAlign:'center', fontWeight:'bold'}}> Don't have any account? Register here</Text>
       </View>
    )
}
export default LoginScreen
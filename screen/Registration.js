import React from "react";
import {Text, View} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Input from "../component/Input";
import Btn from "../component/Btn";

const Registration =()=>{
    return(
        <View style={{height: h('100%'), width:w('100%'), paddingLeft: w('8%'), paddingRight: w('8%'), marginTop: h('7%')}}>
            <Text style={{ fontSize: 30, fontWeight:'900'}} > Registration </Text>
            <Text style={{ marginTop: h('3%'), marginBottom:h('3%')}}> And start taking notes </Text>
            <Text style={{marginBottom: h('1%')}}> Full Name</Text>
            <Input/>
            <Text style={{ marginTop:h('3%'), marginBottom:h('1%')}}> Email Address</Text>
            <Input/>
            <Text style={{ marginTop:h('3%'), marginBottom:h('1%')}}> Password</Text>
            <Input/>
            <Text style={{ marginTop:h('3%'), marginBottom:h('1%')}}> Retype Password</Text>
            <Input/>
            <View style={{ marginTop:h('3%')}}><Btn/></View>
            <Text style={{marginTop:h('3%'), marginBottom:h('2%'), textAlign:'center'}} > Or</Text>
            <Text style={{textAlign:'center', fontWeight:'bold'}}> Alredy have an account? Login here</Text>
             

            
        </View>
    )
}
export default Registration
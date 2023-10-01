import React from "react";
import {Image, Text, View} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

const Welcome2 =()=>{
    return(
        <View style={{
            alignItems:'center',
            marginTop: h('5%'),
        }}>
            <Image style={{
                width: w('50%'),
                height: h('50%'),
                resizeMode: 'contain',
            }} source={require('./images/Group2.png')}/>
           <View>
            <Text style={{
                fontSize:17,
                fontWeight:'bold',
            }}>ADD RECIPIENTS TO NOTES</Text>
           </View>
           <View style={{
            marginTop: h('3%'),
            paddingLeft: w('18%'),
            paddingRight: w('18%'),
           }}>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
           </View>
        </View>
    )
}
export default Welcome2
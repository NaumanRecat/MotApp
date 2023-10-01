import React from "react";
import { View, Image, StyleSheet } from "react-native";
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

const SplashScreen =()=>{
  return(
    <View style={styles.container}>
    <View style={styles.wrap}>
    <Image style={styles.img} source={require('./images/Logo.png')}/>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    wrap:{
        alignItems:'center',
        marginTop: h('24%'),
    },
    img:{
        width: w('50%'),
        height: h('50%'),
        resizeMode: 'contain',
    }

})

export default SplashScreen
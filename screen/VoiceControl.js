import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { widthPercentageToDP as w, heightPercentageToDP as h } from 'react-native-responsive-screen';
import Voice from './Voice';

const VoiceControl = ({navigation}) => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            <Image style={{
                width: w('50%'),
                height: h('40%'),
                resizeMode: 'contain',
            }} source={require('../screen/images/Group.png')} />

            <Image style={{
                width: w('20%'),
                height: h('3%'),
                resizeMode: 'contain',
            }} source={require('../screen/images/Time.png')} />


            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Voice")
                }
                style={{
                    height: 50,
                    width: 50,
                    borderWidth: 1,
                    borderRadius: 50,
                    backgroundColor: "black",
                    alignItems: "center",
                    marginRight: h("5%"),
                    position: "absolute",
                    top: h("80%"),
                    right: h("2%"),
                }}
            >
                <Text style={{ fontSize: 25, color: "white", marginTop: 5 }}> + </Text>
            </TouchableOpacity>

        </View>
    )
}
export default VoiceControl
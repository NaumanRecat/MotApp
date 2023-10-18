import React from "react";
import {View, Text} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

const Video =()=>{
    return(
        <View style={{
            flex:1,
            alignItems:'center',
        }}>
            <View style={{
                height:h('25%'),
                width:w('85%'),
                backgroundColor:('grey'),
                marginTop: h('1%'),
                borderRadius:h('2%'),
                justifyContent:'flex-end',
            }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    marginBottom: h('1%'),
                }}>
                 <Text> 01:05 </Text>
                <Text> 04-May-2023 </Text>
                </View>
            </View>

            <View style={{
                height:h('25%'),
                width:w('85%'),
                backgroundColor:('grey'),
                marginTop: h('1%'),
                borderRadius:h('2%'),
                justifyContent:'flex-end',
            }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    marginBottom: h('1%'),
                }}>
                 <Text> 01:05 </Text>
                <Text> 04-May-2023 </Text>
                </View>
            </View>

            <View style={{
                height:h('25%'),
                width:w('85%'),
                backgroundColor:('grey'),
                marginTop: h('1%'),
                borderRadius:h('2%'),
                justifyContent:'flex-end',
            }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    marginBottom: h('1%'),
                }}>
                 <Text> 01:05 </Text>
                <Text> 04-May-2023 </Text>
                </View>
            </View>
            

            

            
        </View>
    )
}
export default Video
import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import VoiceRecorderItem from './VoiceRecorderItem'; // Assuming you have the VoiceRecorderItem component from the previous example
import VoiceControl from './VoiceControl';

const Voice = ({navigation}) => {
    // Define the number of voice recording cards you want to display
    const numberOfCards = 20;
  
    // Create an array of numbers to use as keys
    const data = Array.from({ length: numberOfCards }, (_, index) => index);
  
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <VoiceRecorderItem key={item} />}
        />

<TouchableOpacity
        onPress={() =>
          navigation.navigate("VoiceControl", {
            data,
            resetInputs: true, // Pass a flag to reset inputs
          })
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
          top: h("75%"),
          right: h("2%"),
        }}
      >
        <Text style={{ fontSize: 25, color: "white", marginTop: 5 }}> + </Text>
      </TouchableOpacity>

      </View>
      
    );
  };
  
  export default Voice;
  
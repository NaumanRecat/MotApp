import React from 'react';
import { View, FlatList } from 'react-native';
import VoiceRecorderItem from './VoiceRecorderItem'; // Assuming you have the VoiceRecorderItem component from the previous example

const Voice = () => {
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
      </View>
    );
  };
  
  export default Voice;
  
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Import your preferred slider library
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you have an icon library

const VoiceRecorderItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mediaControls}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="play" size={24} color="black" />
        </TouchableOpacity>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor="darkcyan"
          minimumTrackTintColor="grey"
          maximumTrackTintColor="grey"
        />
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="volume-up" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection:'row',
      }}>
      <Text style={styles.text}>Duration: XX:XX          </Text>
      <Text style={styles.text}> Date: YYYY-MM-DD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    borderRadius:10
  },
  mediaControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    borderWidth: 2,
    borderColor: 'darkcyan',
    borderRadius: 50, // Make it a circle
    padding: 10,
    marginHorizontal: 10,
  },
  slider: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  },
});

export default VoiceRecorderItem;
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Slider } from '@react-native-assets/slider';

const Voice = () => {

    const [recording, setRecording] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);

    // Function to handle the slider value change
    const handleSliderChange = (value) => {
        setSliderValue(value);
    };

    // Function to handle the recording button press
    const handleRecordButtonPress = () => {
        // Toggle recording state when the button is pressed
        setRecording(!recording);
    };

    return (
        <View style={{ flex: 1}}>
            <Slider
                value={sliderValue}
                minimumValue={0}
                maximumValue={1}
                step={0.01}
                minimumTrackTintColor="grey"
                maximumTrackTintColor="grey"
                thumbTintColor="darkcyan"
                onValueChange={handleSliderChange}
                style={{ width: 300 }}
            />
            <TouchableOpacity
                onPress={handleRecordButtonPress}
                style={{
                    marginTop: 20,
                    backgroundColor: recording ? 'red' : 'green',
                    padding: 20,
                    borderRadius: 10,
                }}
            >
                <Text style={{ color: 'white', fontSize: 18 }}>
                    {recording ? 'Stop Recording' : 'Start Recording'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Voice
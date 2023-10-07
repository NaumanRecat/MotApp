import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { widthPercentageToDP as w, heightPercentageToDP as h } from "react-native-responsive-screen";

const AddNotes = ({ navigation, route }) => {
  // Retrieve existing data or initialize with an empty array
  const existingData = route.params?.data || [];

  // Retrieve the initial values for title and notes
  const initialTitle = route.params?.title || "";
  const initialNotes = route.params?.notes || "";

  const [title, setTitle] = useState(initialTitle);
  const [notes, setNotes] = useState(initialNotes);

  // Check if resetInputs flag is set
  useEffect(() => {
    if (route.params?.resetInputs) {
      setTitle("");
      setNotes("");
    }
  }, [route.params]);

  const handleSave = () => {
    // Create an object with the input data
    const newData = { title, notes };

    // Combine the new data with the existing data
    const updatedData = [...existingData, newData];

    // Navigate back to the "Notes" screen with the updated data
    navigation.navigate("Notes", { data: updatedData });
  };

  return (
    <View
      style={{
        flex: 1,
        height: h("100%"),
        width: w("100%"),
      }}
    >
      <TextInput
        style={{ fontSize: 40, height: h("10%") }}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        multiline={true}
        style={{ fontSize: 20 }}
        placeholder="Type your notes"
        value={notes}
        onChangeText={(text) => setNotes(text)}
      />

      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginBottom: h("5%"),
        }}
      >
        <TouchableOpacity
          onPress={handleSave}
          style={{
            height: 50,
            width: 50,
            borderWidth: 1,
            borderRadius: 50,
            backgroundColor: "black",
            alignItems: "center",
            marginRight: h("5%"),
          }}
        >
          <Text style={{ fontSize: 25, color: "white", marginTop: 5 }}> ✓ </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNotes;

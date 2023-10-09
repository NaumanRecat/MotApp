import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { widthPercentageToDP as w, heightPercentageToDP as h } from "react-native-responsive-screen";

const Notes = ({ route, navigation }) => {
  // Get the data passed from the AddNotes screen or initialize with an empty array
  const data = route.params?.data || [];

  const renderNoteItem = ({ item }) => (
    <View
      style={{
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 16,
        backgroundColor: '#f5f5f5', // Background color
        borderRadius: 8,
        elevation: 2, // Shadow for Android
        shadowColor: 'rgba(0, 0, 0, 0.1)', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 8,
        }}
      >
        Title: {item.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
        }}
      >
        Notes: {item.notes}
      </Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderNoteItem}
      />

      {/* Button to navigate to AddNotes */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AddNotes", {
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

export default Notes;

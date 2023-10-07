import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { widthPercentageToDP as w, heightPercentageToDP as h } from "react-native-responsive-screen";
import AddNotes from "./AddNotes";


const Notes = ({ route, navigation }) => {
  const data = route.params?.data;

  return (
    <View>
      {data ? (
        <FlatList
          data={[data]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Title: {item.title}</Text>
              <Text>Notes: {item.notes}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No data available</Text>
      )}

      {/* Button to navigate to AddNotes */}
      <TouchableOpacity
        onPress={() => navigation.navigate("AddNotes")}
        style={{
          height: 50,
          width: 50,
          borderWidth: 1,
          borderRadius: 50,
          backgroundColor: "black",
          alignItems: "center",
          marginRight: h("5%"),
          position: "absolute",
          top: h("70%"), // Adjust the positioning as needed
          right: h("2%"), // Adjust the positioning as needed
        }}
      >
        <Text style={{ fontSize: 25, color: "white", marginTop: 5 }}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notes;

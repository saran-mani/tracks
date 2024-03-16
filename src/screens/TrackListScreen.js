import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";

import { Context as TrackContext } from "../context/TrackContext";
import { ListItem } from "@rneui/base";

const TrackListScreen = () => {
  const navigation = useNavigation();

  const { state, fetchTracks } = useContext(TrackContext);
  navigation.addListener("focus", () => fetchTracks());
  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TrackDetail", { _id: item._id })
            }
          >
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

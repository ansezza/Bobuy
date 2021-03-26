import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Jeorge hood",
    description: "Hey! Is this item still available?",
    image: require("../assets/man1.jpg"),
  },
  {
    id: 2,
    title: "Mark kali",
    description:
      "I liked this item. When will you be able to post it?",
    image: require("../assets/man2.jpg"),
  },
  {
    id: 3,
    title: "Narkos polle",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/man3.jpg"),
  },
  {
    id: 4,
    title: "linda parish",
    description: "Can you decrease the price?",
    image: require("../assets/woman.jpg"),
  },
  {
    id: 5,
    title: "Lorrenzo kayta ",
    description: "Can you decrease the price?",
    image: require("../assets/man4.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/man2.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;

import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";
import { GreetingUser } from "../../components/UI/GreetingUser";
import { AppartmentList } from "../../components/Home/AppartmentList";
import { Users } from "../../components/Home/Users";
import { PostList } from "../../components/Posts/PostList";

export default function index() {
  return (
    <ScrollView
      style={styles.appContainer}
      showsVerticalScrollIndicator={false}
    >
      <GreetingUser />

      <View>
        <AppartmentList />
        <Users />

        <PostList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

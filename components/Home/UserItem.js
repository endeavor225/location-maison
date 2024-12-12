import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const UserItem = ({ user }) => {
  return (
    <TouchableOpacity style={styles.root}>
      <Image
        source={{
          uri: "https://i.pravatar.cc/250",
        }}
        style={styles.userImage}
      />

      <View style={styles.starsContainer}>
        <AntDesign name="star" size={20} color="#ff9e81" />
        <AntDesign name="star" size={20} color="#ff9e81" />
        <AntDesign name="star" size={20} color="#ff9e81" />
        <AntDesign name="star" size={20} color="white" />
        <AntDesign name="star" size={20} color="white" />
      </View>

      <View>
        <Text style={styles.userName}>
          {user.lastname} {user.firstname}
        </Text>
      </View>

      <View style={styles.last}>
        <Text style={styles.total}>+40</Text>

        <AntDesign name="arrowright" size={20} color={"white"} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#4e5ac8",
    width: 170,
    padding: 10,
    borderRadius: 15,
  },
  userImage: {
    width: 70,
    height: 70,
    objectFit: "cover",
    borderRadius: 15,
  },

  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    margin: 10,
  },

  userName: {
    color: "white",
    fontSize: 20,
  },

  last: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  total: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
export default UserItem;

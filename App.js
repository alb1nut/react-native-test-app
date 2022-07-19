import { StatusBar } from "expo-status-bar";
import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the</Text>

      <Image
        style={styles.img}
        // source={require("assets/logo.png")}
        source={{
          uri: "https://instagram.facc5-2.fna.fbcdn.net/v/t51.2885-19/283730086_416764853370507_7577824810714480038_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.facc5-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=SAg4qiETbg8AX8m7gs1&edm=ALbqBD0BAAAA&ccb=7-5&oh=00_AT-b5wRz17R4m8GGT9Uw63sR5NJZ8l3gvvQQaaaqm1oDlg&oe=62DD2FB0&_nc_sid=9a90d6",
        }}
      />
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: "#6C1EFF",
          alignItems: "center",
          justifyContent: "center",
          padding: 15,
          marginBottom: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Click Here</Text>
      </TouchableOpacity>
      <Text style={styles.text2}>To Get Started</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: "40",
    color: "#000",
  },
  text2: {
    fontSize: "15",
    color: "#000",
  },

  img: {
    width: 250,
    height: 250,
  },

  btn: {
    marginVertical: 8,
  },
});

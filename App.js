import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/Best.png")} style={styles.img} />
      <View syle={styles.tittleContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 55,
    paddingHorizontal: 24,
  },
  img: { height: 200, width: 200, alignSelf: "center" },
  tittleContainer: {},
  title: {},
  des: {},
  signinButton: {},
  signinButtonTitle: {},
  signupButton: {},
});
